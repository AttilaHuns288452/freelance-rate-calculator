"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  CalculatorInputs,
  CalculatorResults,
  calculateFreelanceRate,
  PRESETS,
  formatCurrency,
  formatRate,
} from "@/lib/calculations";
import ResultCard from "./ResultCard";
import AdBannerFreelance from "./AdBannerFreelance";

const DEFAULT_INPUTS: CalculatorInputs = {
  desiredAnnualIncome: 100000,
  billableHoursPerWeek: 25,
  weeksWorkedPerYear: 46,
  monthlyBusinessExpenses: 300,
  annualTaxRate: 0.3,
  healthInsuranceMonthly: 450,
  retirementContributionMonthly: 500,
  riskBufferPercent: 15,
};

type FieldKey = keyof CalculatorInputs;
interface FieldMeta {
  key: FieldKey;
  label: string;
  suffix: string;
  step: number;
  min: number;
  max?: number;
  isPercent?: boolean;
  help: string;
  tip?: string;
  group: "lifestyle" | "costs";
  slider?: boolean;
  icon: string;
}

const FIELDS: FieldMeta[] = [
  { key: "desiredAnnualIncome", label: "Target Annual Income", suffix: "/yr", step: 5000, min: 0, help: "Take-home after taxes — your lifestyle number.", tip: "💡 $60K comfortable, $100K freedom, $150K+ luxuries", group: "lifestyle", icon: "💵" },
  { key: "billableHoursPerWeek", label: "Billable Hours / Week", suffix: "hrs/wk", step: 1, min: 1, max: 40, help: "Hours you bill clients. Admin/marketing are extra.", tip: "💡 20–25 hrs = balanced life", group: "lifestyle", slider: true, icon: "⏱️" },
  { key: "weeksWorkedPerYear", label: "Weeks Worked / Year", suffix: "wks", step: 1, min: 1, max: 51, help: "Vacation, holidays, sick, bench time. More off = higher rate.", tip: "💡 46 wks (6 off) is a good balance", group: "lifestyle", slider: true, icon: "📅" },
  { key: "monthlyBusinessExpenses", label: "Business Expenses", suffix: "/mo", step: 50, min: 0, help: "Software, internet, coworking, equipment.", tip: "💡 $100–300 basic, $300–1k full setup", group: "costs", icon: "🧰" },
  { key: "annualTaxRate", label: "Effective Tax Rate", suffix: "%", step: 1, min: 0, max: 50, isPercent: true, help: "Combined income + SE tax. SE alone is 15.3%.", tip: "💡 Freelancers typically 25–35%", group: "costs", slider: true, icon: "🧾" },
  { key: "healthInsuranceMonthly", label: "Health Insurance", suffix: "/mo", step: 50, min: 0, help: "Monthly premium. Employers cover 50–80%; you cover 100%.", tip: "💡 $400–800 individual, $1.2k–2.5k family", group: "costs", icon: "🛡️" },
  { key: "retirementContributionMonthly", label: "Retirement Savings", suffix: "/mo", step: 50, min: 0, help: "Solo 401(k) / IRA. No employer match.", tip: "💡 Aim 10–15% of income", group: "costs", icon: "🏦" },
  { key: "riskBufferPercent", label: "Safety Buffer", suffix: "%", step: 1, min: 0, max: 50, isPercent: true, help: "Padding for late payments & slow months.", tip: "💡 15–25% comfortable", group: "costs", slider: true, icon: "⚡" },
];

const PRESET_LABELS: Record<string, { label: string; desc: string }> = {
  custom: { label: "✏️ Custom", desc: "" },
  "us-web-dev": { label: "🇺🇸 US Web Dev", desc: "$120K · 25h · 46w" },
  "us-designer": { label: "🇺🇸 US Designer", desc: "$90K · 20h · 44w" },
  "uk-contractor": { label: "🇬🇧 UK Contractor", desc: "£70K · 30h · 46w" },
  "starter-side-hustle": { label: "🚀 Side Hustle", desc: "$24K · 10h · 48w" },
  "eu-freelancer": { label: "🇪🇺 EU Freelancer", desc: "€75K · 28h · 45w" },
  "agency-owner": { label: "🏢 Agency Owner", desc: "$180K · 20h · 46w" },
};

function HelpIcon({ help, tip }: { help: string; tip?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button type="button" onClick={() => setOpen((v) => !v)} onBlur={() => setTimeout(() => setOpen(false), 180)}
        className="inline-flex items-center justify-center w-4 h-4 ml-1.5 text-gray-400 hover:text-blue-600 focus:outline-none transition-colors" aria-label="Help">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.529 9.988a2.502 2.502 0 115.191.237C14.43 12.45 12.5 13.5 12.5 15m0 2.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </button>
      {open && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-gray-900 text-white text-xs rounded-xl shadow-xl leading-relaxed">
          <p>{help}</p>{tip && <p className="mt-2 text-blue-300">{tip}</p>}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </span>
  );
}

function fieldDisplayValue(f: FieldMeta, v: number): string {
  if (f.isPercent) return String(f.key === "annualTaxRate" ? Math.round(v * 100) : v);
  return String(v);
}
function sliderFill(f: FieldMeta, disp: number) {
  const min = f.min, max = f.max ?? 100;
  const pct = Math.max(0, Math.min(100, ((disp - min) / (max - min)) * 100));
  return `linear-gradient(to right, #2563eb 0%, #3b82f6 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`;
}

export default function RateCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);
  const [activePreset, setActivePreset] = useState<string>("custom");
  const [copied, setCopied] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [shakeKey, setShakeKey] = useState<string | null>(null);
  const billableHoursRef = useRef<HTMLInputElement>(null);

  const results: CalculatorResults = useMemo(() => calculateFreelanceRate(inputs), [inputs]);
  const annualHours = inputs.billableHoursPerWeek * inputs.weeksWorkedPerYear;
  const weeksOff = 52 - inputs.weeksWorkedPerYear;

  // read URL + localStorage on mount
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const map: Record<string, FieldKey> = { income: "desiredAnnualIncome", hrs: "billableHoursPerWeek", wks: "weeksWorkedPerYear", expenses: "monthlyBusinessExpenses", tax: "annualTaxRate", health: "healthInsuranceMonthly", retirement: "retirementContributionMonthly", buffer: "riskBufferPercent" };
    const next: Partial<CalculatorInputs> = {};
    let has = false;
    for (const [param, key] of Object.entries(map)) {
      const raw = p.get(param);
      if (raw !== null) {
        const n = parseFloat(raw);
        if (!isNaN(n)) {
          (next as Record<string, number>)[key] = key === "annualTaxRate" ? n / 100 : n;
          has = true;
        }
      }
    }
    if (has) {
      // clamp weeksWorked 1-51, billable 1-40, tax 0-0.5
      if (next.weeksWorkedPerYear !== undefined) next.weeksWorkedPerYear = Math.min(51, Math.max(1, next.weeksWorkedPerYear));
      if (next.billableHoursPerWeek !== undefined) next.billableHoursPerWeek = Math.min(40, Math.max(1, next.billableHoursPerWeek));
      if (next.annualTaxRate !== undefined) next.annualTaxRate = Math.min(0.5, Math.max(0, next.annualTaxRate));
      setInputs((prev) => ({ ...prev, ...next }));
    } else {
      try {
        const saved = localStorage.getItem("frc-preset");
        const savedInputs = localStorage.getItem("frc-inputs");
        if (saved && PRESETS[saved]) { setInputs((prev) => ({ ...prev, ...PRESETS[saved] })); setActivePreset(saved); }
        else if (savedInputs) { const parsed = JSON.parse(savedInputs); setInputs((prev) => ({ ...prev, ...parsed })); }
      } catch {}
    }
    setHydrated(true);
  }, []);

  // persist inputs + preset
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("frc-inputs", JSON.stringify(inputs));
      if (activePreset !== "custom") localStorage.setItem("frc-preset", activePreset);
    } catch {}
  }, [inputs, activePreset, hydrated]);

  // URL sync
  useEffect(() => {
    if (!hydrated) return;
    const p = new URLSearchParams();
    p.set("income", String(inputs.desiredAnnualIncome));
    p.set("hrs", String(inputs.billableHoursPerWeek));
    p.set("wks", String(inputs.weeksWorkedPerYear));
    p.set("expenses", String(inputs.monthlyBusinessExpenses));
    p.set("tax", String(Math.round(inputs.annualTaxRate * 100)));
    p.set("health", String(inputs.healthInsuranceMonthly));
    p.set("retirement", String(inputs.retirementContributionMonthly));
    p.set("buffer", String(inputs.riskBufferPercent));
    window.history.replaceState(null, "", `${window.location.pathname}?${p.toString()}`);
  }, [inputs, hydrated]);

  const handleChange = useCallback((key: FieldKey, raw: string) => {
    const f = FIELDS.find((x) => x.key === key)!;
    let n = parseFloat(raw);
    if (isNaN(n)) n = 0;
    if (f.isPercent && key === "annualTaxRate") n = n / 100;
    // clamps
    if (key === "weeksWorkedPerYear") n = Math.min(51, Math.max(1, Math.round(n)));
    if (key === "billableHoursPerWeek") n = Math.min(40, Math.max(0, Math.round(n)));
    if (key === "annualTaxRate") n = Math.min(0.5, Math.max(0, n));
    if (n < f.min) n = f.min;
    if (f.max !== undefined && key !== "weeksWorkedPerYear" && key !== "billableHoursPerWeek" && key !== "annualTaxRate" && n > f.max) n = f.max;
    // shake on 0 billable
    if (key === "billableHoursPerWeek" && n === 0) {
      setShakeKey(key);
      setTimeout(() => setShakeKey(null), 400);
      n = 1;
      // still update but shake
    }
    setInputs((prev) => ({ ...prev, [key]: n }));
    setActivePreset("custom");
  }, []);

  const handleSlider = useCallback((key: FieldKey, raw: string) => {
    const n = parseFloat(raw);
    const f = FIELDS.find((x) => x.key === key)!;
    if (f.isPercent && key === "annualTaxRate") setInputs((prev) => ({ ...prev, [key]: n / 100 }));
    else setInputs((prev) => ({ ...prev, [key]: n }));
    setActivePreset("custom");
  }, []);

  const handlePreset = (k: string) => {
    if (k === "custom") { setActivePreset("custom"); return; }
    const preset = PRESETS[k];
    if (preset) { setInputs((prev) => ({ ...prev, ...preset })); setActivePreset(k); }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied("link"); setTimeout(() => setCopied(null), 1800);
  };
  const resetDefaults = () => {
    setInputs(DEFAULT_INPUTS); setActivePreset("custom");
    try { localStorage.removeItem("frc-preset"); localStorage.removeItem("frc-inputs"); } catch {}
  };

  const lifestyle = FIELDS.filter((f) => f.group === "lifestyle");
  const costs = FIELDS.filter((f) => f.group === "costs");

  // inline preview for income: $100K/yr · $46.2/hr → $370/day (approx from results)
  const hourlyPreview = annualHours > 0 ? Math.round(results.targetHourlyRate) : 0;
  const dayPreview = hourlyPreview * 8;

  const fieldCard = (f: FieldMeta) => {
    const v = inputs[f.key] as number;
    const disp = fieldDisplayValue(f, v);
    const isWeeks = f.key === "weeksWorkedPerYear";
    const isBillable = f.key === "billableHoursPerWeek";
    const isIncome = f.key === "desiredAnnualIncome";
    const shake = shakeKey === f.key;
    const dispNum = f.isPercent && f.key === "annualTaxRate" ? Math.round(v * 100) : v;
    return (
      <div key={f.key} className={`group rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-all ${shake ? "animate-shake border-red-300" : "border-gray-200"}`}>
        <label htmlFor={f.key} className="flex items-center text-[13px] font-semibold text-gray-800">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-50 border border-gray-200 text-[13px] mr-2">{f.icon}</span>
          {f.label} <HelpIcon help={f.help} tip={f.tip} />
          {isWeeks && <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">{weeksOff} wks off</span>}
          {isBillable && annualHours === 0 && <span className="ml-auto text-xs font-medium text-red-600">Required</span>}
        </label>
        <div className="relative mt-2.5">
          <input
            id={f.key}
            ref={isBillable ? billableHoursRef : undefined}
            type="number"
            inputMode="numeric"
            value={disp}
            onChange={(e) => handleChange(f.key, e.target.value)}
            min={f.min}
            max={f.max}
            step={f.step}
            aria-label={f.label}
            className="w-full px-3.5 py-2.5 pr-12 border border-gray-200 rounded-xl text-[15px] font-medium text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none">{f.isPercent ? "%" : f.suffix}</span>
        </div>
        {isIncome && (
          <p className="mt-1.5 text-xs text-gray-500">{formatCurrency(v)}/yr · {hourlyPreview > 0 ? `${formatCurrency(hourlyPreview)}/hr → ${formatCurrency(dayPreview)}/day` : "—"}</p>
        )}
        {!isIncome && !f.isPercent && (v as number) > 0 && (
          <p className="mt-1.5 text-xs text-gray-400">{formatCurrency(v)}/mo · {formatCurrency((v as number) * 12)}/yr</p>
        )}
        {f.slider && (
          <input
            type="range"
            min={f.min}
            max={f.max}
            step={f.step}
            value={String(dispNum)}
            onChange={(e) => handleSlider(f.key, e.target.value)}
            aria-label={`${f.label} slider`}
            style={{ background: sliderFill(f, dispNum) }}
            className="mt-3 w-full"
          />
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Lifestyle preview */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex flex-wrap items-center gap-2 text-sm bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-gray-900">Work {inputs.billableHoursPerWeek}h/wk · {weeksOff} wks off</span>
          <span className="text-gray-400">→</span>
          <span className="font-bold text-blue-700">{annualHours.toLocaleString()} billable hrs/yr</span>
          {inputs.desiredAnnualIncome > 0 && annualHours > 0 && (
            <span className="text-gray-500 hidden sm:inline">· {formatCurrency(Math.round(inputs.desiredAnnualIncome / annualHours))}/hr take-home</span>
          )}
        </p>
        <button onClick={resetDefaults} className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-500 transition-colors">Reset to defaults</button>
      </div>

      {/* Presets */}
      <div className="card p-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold tracking-tight text-gray-900">Quick Start Presets</p>
          <span className="text-xs text-gray-400 hidden sm:inline">Tap to auto-fill realistic numbers • saved to this device</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(PRESET_LABELS).map(([k, { label, desc }]) => (
            <button
              key={k}
              onClick={() => handlePreset(k)}
              aria-pressed={activePreset === k}
              className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-all ${activePreset === k ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200" : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"}`}
            >
              {label} {desc && activePreset !== k && <span className="text-gray-400 font-normal hidden md:inline">· {desc}</span>}
            </button>
          ))}
        </div>
        {activePreset !== "custom" && <p className="mt-2 text-xs text-blue-600">✓ {PRESET_LABELS[activePreset]?.label} active — tweak any field to customize</p>}
      </div>

      {/* Main 2-col */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        {/* Left: inputs */}
        <div className="space-y-6 min-w-0">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-5 rounded-full bg-blue-600" />
              <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-blue-700">Your Lifestyle</h2>
              <span className="text-xs text-gray-400">Income · Time · Freedom</span>
            </div>
            <div className="grid gap-3">{lifestyle.map(fieldCard)}</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-5 rounded-full bg-emerald-600" />
              <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-emerald-700">Costs & Safety</h2>
              <span className="text-xs text-gray-400">Taxes · Benefits · Buffer</span>
            </div>
            <div className="grid gap-3">{costs.map(fieldCard)}</div>
          </div>
          <div className="flex flex-wrap gap-2 no-print">
            <button onClick={copyLink} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              {copied === "link" ? "Link copied!" : "Copy share link"}
            </button>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              Save as PDF
            </button>
          </div>
        </div>

        {/* Right: sticky results */}
        <div className="lg:sticky lg:top-[4.5rem] space-y-4 min-w-0">
          <ResultCard results={results} formatCurrency={formatCurrency} formatRate={formatRate} inputs={inputs} />
          <div className="min-h-[110px]">
            <AdBannerFreelance spot="below-results" />
          </div>
          <div className="card p-4">
            <p className="text-xs text-gray-400 text-center mb-2">Keep exploring</p>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="/blog/freelance-hourly-rate-calculator-guide" className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors">Rate Guide →</a>
              <a href="/blog/freelancer-vs-employee-cost-comparison-2026" className="text-xs px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors">W-2 vs 1099 →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
