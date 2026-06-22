"use client";

import { useState, useEffect } from "react";
import { CalculatorInputs, CalculatorResults, calculateFreelanceRate, PRESETS, formatCurrency, formatRate } from "@/lib/calculations";
import ResultCard from "./ResultCard";
import AffiliateLinks from "./AffiliateLinks";

interface FieldConfig {
  key: keyof CalculatorInputs;
  label: string;
  suffix: string;
  step: number;
  min: number;
  max?: number;
  isPercent?: boolean;
  help: string;
  tip?: string;
  lifeLabel?: string;
}

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

const FIELD_CONFIG: FieldConfig[] = [
  {
    key: "desiredAnnualIncome", label: "Target Annual Income", suffix: "/yr", step: 5000, min: 0,
    lifeLabel: "How much do you want to earn per year to live your ideal life?",
    help: "Think about the life you want — not just survival. What income would let you travel, save, buy what you want, and sleep peacefully?",
    tip: "💡 Dream big: $60K = comfortable solo, $100K = lifestyle freedom, $150K+ = luxuries + savings",
  },
  {
    key: "billableHoursPerWeek", label: "Hours You Actually Work", suffix: "hrs/wk", step: 1, min: 1, max: 40,
    lifeLabel: "How many hours per week do you actually want to work?",
    help: "This is your IDEAL — not your current grind. How many hours do you want to actually sit and bill clients? Remember: this is just client work, not emails or meetings.",
    tip: "💡 Dream life: 20-25 hrs = balanced life. 30+ hrs = more money, less time off.",
  },
  {
    key: "weeksWorkedPerYear", label: "Weeks Off Per Year", suffix: "off", step: 1, min: 0, max: 51,
    lifeLabel: "How many weeks of freedom do you want each year?",
    help: "Think: vacations, travel, family time, holidays, sick days, and buffer between clients. The more weeks off, the higher your rate needs to be — but the better your life.",
    tip: "💡 Dream life: 6 weeks off (46 working) = good balance. 8-10 weeks off = full freedom lifestyle.",
  },
  {
    key: "monthlyBusinessExpenses", label: "Monthly Cost of Doing Business", suffix: "/mo", step: 50, min: 0,
    lifeLabel: "What does it cost to run your dream business each month?",
    help: "Software, internet, phone, coworking space, equipment, marketing — everything you need to run your business smoothly.",
    tip: "💡 Basic: $100-300/mo. Full setup with tools: $300-1,000/mo.",
  },
  {
    key: "annualTaxRate", label: "Tax Rate", suffix: "%", step: 1, min: 0, max: 50, isPercent: true,
    lifeLabel: "How much of your income goes to taxes?",
    help: "Your total tax rate including income tax + self-employment tax. As a freelancer, you pay both sides of Social Security and Medicare.",
    tip: "💡 Freelancers typically pay 25-40%. Self-employment tax alone is 15.3%.",
  },
  {
    key: "healthInsuranceMonthly", label: "Health Insurance (Monthly)", suffix: "/mo", step: 50, min: 0,
    lifeLabel: "Peace of mind — health coverage monthly cost",
    help: "Your health insurance premium. As a freelancer, you're on your own — employers usually cover 50-80% of this. Factor it in so you're never caught off guard.",
    tip: "💡 Individual: $400-800/mo. Family: $1,200-2,500/mo.",
  },
  {
    key: "retirementContributionMonthly", label: "Retirement Savings (Monthly)", suffix: "/mo", step: 50, min: 0,
    lifeLabel: "How much do you want to save for your future each month?",
    help: "Building your future. Employees get 401(k) matches — you don't. But you can build more wealth on your own terms.",
    tip: "💡 Aim for 10-15% of income. $500/mo = $6K/yr growing with interest.",
  },
  {
    key: "riskBufferPercent", label: "Safety Buffer", suffix: "%", step: 1, min: 0, max: 50, isPercent: true,
    lifeLabel: "How much padding do you need to feel secure?",
    help: "Extra room for: slow months, clients who pay late, equipment breaking, sick days, or just having room to negotiate without stress.",
    tip: "💡 15-25% is comfortable. Start higher (25%) if you're new or in a variable field.",
  },
];

function HelpIcon({ help, tip }: { help: string; tip?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className="inline-flex items-center justify-center w-4 h-4 ml-1 text-gray-400 hover:text-blue-500 focus:outline-none transition-colors"
        aria-label="Help"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.529 9.988a2.502 2.502 0 115.191.237C14.43 12.45 12.5 13.5 12.5 15m0 2.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl">
          <p className="leading-relaxed">{help}</p>
          {tip && <p className="mt-2 text-blue-300 leading-relaxed">{tip}</p>}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </span>
  );
}

function NotSureBanner({ onApply }: { onApply: (presetKey: string) => void }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-1"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Not sure what numbers to put? Try a preset for your situation
      </button>
      {show && (
        <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900 font-medium mb-3">Pick a preset to auto-fill realistic numbers:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "us-web-dev", label: "🇺🇸 US Web Developer", desc: "$100K target, 25hrs/wk, 46 wks" },
              { key: "us-designer", label: "🇺🇸 US Designer", desc: "$80K target, 22hrs/wk, 46 wks" },
              { key: "uk-contractor", label: "🇬🇧 UK Contractor", desc: "£70K target, 24hrs/wk, 44 wks" },
              { key: "starter-side-hustle", label: "🚀 Side Hustle Starter", desc: "$30K target, 10hrs/wk, 48 wks" },
            ].map(({ key, label, desc }) => (
              <button
                key={key}
                onClick={() => { onApply(key); setShow(false); }}
                className="flex-1 min-w-[160px] p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-sm transition-all text-left"
              >
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function RateCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [activePreset, setActivePreset] = useState<string>("custom");

  useEffect(() => {
    setResults(calculateFreelanceRate(inputs));
  }, [inputs]);

  const handleChange = (key: keyof CalculatorInputs, value: string | number) => {
    const numValue = typeof value === "string" ? parseFloat(value) || 0 : value;
    setInputs(prev => ({ ...prev, [key]: numValue }));
    setActivePreset("custom");
  };

  const handlePresetChange = (presetKey: string) => {
    if (presetKey === "custom") return;
    const preset = PRESETS[presetKey];
    if (preset) {
      setInputs(prev => ({ ...prev, ...preset }));
      setActivePreset(presetKey);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Preset Selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <label className="block text-sm font-medium text-gray-700 mb-3">Quick Start Presets</label>
        <div className="flex flex-wrap gap-2">
          {[
            { key: "custom", label: "Custom" },
            { key: "us-web-dev", label: "US Web Developer" },
            { key: "us-designer", label: "US Designer" },
            { key: "uk-contractor", label: "UK Contractor" },
            { key: "starter-side-hustle", label: "Side Hustle Starter" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handlePresetChange(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePreset === key
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Design Your Ideal Lifestyle</h2>
        <p className="text-sm text-gray-500 mb-4">Tell us about the life you want — the calculator figures out what you need to charge to make it happen.</p>

        {/* Not Sure Banner */}
        <NotSureBanner onApply={handlePresetChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FIELD_CONFIG.map(({ key, label, suffix, step, min, max, isPercent, help, tip }) => (
            <div key={key} className="space-y-1">
              <label htmlFor={key} className="block text-sm text-gray-600">
                <span className="flex items-center">
                  {label}
                  <HelpIcon help={help} tip={tip} />
                </span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  id={key}
                  value={inputs[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  min={min}
                  max={max}
                  step={isPercent ? 1 : step}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  inputMode="numeric"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  {isPercent ? "%" : suffix}
                </span>
              </div>
              {isPercent && max && (
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={inputs[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      {results && (
        <>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Rate Breakdown</h2>
          <ResultCard results={results} formatCurrency={formatCurrency} formatRate={formatRate} />
          <div className="flex justify-center mt-6 no-print">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6h5H3a2 2 0 01-2-2 2 2 0 012-2h2l3 3h7l3-3h2a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4M12 16h.01"></path>
              </svg>
              Save as PDF
            </button>
          </div>
          <div className="no-print">
            <AffiliateLinks />
          </div>
        </>
      )}

      {/* AdSense placeholder */}
      {results && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm no-print">
          <p className="text-xs text-gray-400 mb-4"><small>Sponsored</small></p>
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-4645179646749256"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      )}

      {/* Feedback Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm" id="feedback">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">💬 Help Us Improve</h2>
        <FeedbackForm />
      </div>

      {/* Methodology / SEO Content */}
      <details className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <summary className="cursor-pointer font-medium text-gray-900">How this calculation works</summary>
        <div className="mt-4 space-y-3 text-sm text-gray-600">
          <p><strong>Formula:</strong> (Desired Income + Business Expenses + Benefits) ÷ (1 − Tax Rate) × (1 + Risk Buffer) ÷ Annual Billable Hours</p>
          <p><strong>Billable hours ≠ 40:</strong> Most freelancers only bill 20–30 hrs/week. The rest is admin, sales, learning, and downtime.</p>
          <p><strong>Risk buffer (10–20%):</strong> Covers non-billable time, client gaps, scope creep, and rate negotiation room.</p>
          <p><strong>Employed equivalent:</strong> Adds ~35% for employer payroll tax, benefits, paid leave, and equipment — what a W-2 role would cost.</p>
        </div>
      </details>
    </div>
  );
}

// Simple feedback form component
function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("freelance-feedback") || "[]");
    existing.push({ name, message, date: new Date().toISOString() });
    localStorage.setItem("freelance-feedback", JSON.stringify(existing));
    setSent(true);
  };

  if (sent) {
    return <p className="text-green-600 font-medium text-sm">Thank you for your feedback! 🙏</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <textarea
        placeholder="How can we make this calculator better? Any features you'd like?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Feedback 💬
      </button>
    </form>
  );
}