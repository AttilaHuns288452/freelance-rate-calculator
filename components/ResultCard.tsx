"use client";

import { useEffect, useState } from "react";
import { CalculatorResults } from "@/lib/calculations";

interface ResultCardProps {
  results: CalculatorResults;
  formatCurrency: (amount: number) => string;
  formatRate: (rate: number) => string;
  inputs: { desiredAnnualIncome: number; billableHoursPerWeek: number; weeksWorkedPerYear: number; annualTaxRate: number; riskBufferPercent: number };
}

function useCountUp(target: number, duration = 650) {
  const [val, setVal] = useState(target);
  useEffect(() => {
    const start = val;
    const diff = target - start;
    if (diff === 0) return;
    const steps = Math.max(12, Math.min(30, Math.abs(diff) < 20 ? 12 : 22));
    let i = 0;
    const id = setInterval(() => {
      i++;
      const p = i / steps;
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + diff * eased));
      if (i >= steps) { setVal(target); clearInterval(id); }
    }, duration / steps);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return val;
}

export default function ResultCard({ results, formatCurrency, formatRate, inputs }: ResultCardProps) {
  const annualHours = inputs.billableHoursPerWeek * inputs.weeksWorkedPerYear;
  const totalHoursYear = 52 * 40;
  const billPct = annualHours > 0 ? Math.min(100, Math.round((annualHours / totalHoursYear) * 100)) : 0;
  const animatedRate = useCountUp(results.targetHourlyRate);
  const [copiedProposal, setCopiedProposal] = useState(false);
  const [shared, setShared] = useState(false);

  const hasZeroIncome = inputs.desiredAnnualIncome <= 0;
  const deltaPct = hasZeroIncome ? 0 : Math.round(((results.totalAnnualCosts - inputs.desiredAnnualIncome) / inputs.desiredAnnualIncome) * 100);
  const vsSalaryPct = hasZeroIncome ? 0 : Math.round(((results.employedEquivalentSalary - inputs.desiredAnnualIncome) / inputs.desiredAnnualIncome) * 100);

  const proposal = `To earn ${formatCurrency(inputs.desiredAnnualIncome)}/yr working ${inputs.billableHoursPerWeek} billable hrs/wk (${inputs.weeksWorkedPerYear} wks/yr), charge ${formatRate(results.targetHourlyRate)} — that's ${formatCurrency(results.dayRate)}/day, ${formatCurrency(results.weeklyRate)}/wk, ${formatCurrency(results.monthlyRetainer)}/mo.`;

  const copyProposal = async () => {
    await navigator.clipboard.writeText(proposal);
    setCopiedProposal(true); setTimeout(() => setCopiedProposal(false), 1800);
  };
  const shareProposal = async () => {
    const url = window.location.href;
    const text = proposal;
    // Web Share API
    if (navigator.share) {
      try { await navigator.share({ title: "My freelance rate", text, url }); setShared(true); setTimeout(() => setShared(false), 1800); return; } catch {}
    }
    await navigator.clipboard.writeText(`${text} ${url}`);
    setShared(true); setTimeout(() => setShared(false), 1800);
  };

  // stacked bar segments: take-home, taxes, benefits+expenses, buffer
  const total = Math.max(1, results.totalAnnualCosts);
  const takeHome = inputs.desiredAnnualIncome;
  const taxes = results.annualTaxes;
  const benefits = results.annualBenefits;
  const expenses = results.annualBusinessExpenses;
  // buffer = total - grossNeeded, grossNeeded = total / (1+buffer%)
  const grossNeeded = total / (1 + inputs.riskBufferPercent / 100);
  const bufferAmt = Math.round(total - grossNeeded);
  const seg = [
    { label: "Take-home", value: takeHome, color: "bg-[#5e6ad2]", text: "text-white" },
    { label: "Taxes", value: taxes, color: "bg-amber-500", text: "text-white" },
    { label: "Benefits", value: benefits, color: "bg-emerald-500", text: "text-white" },
    { label: "Expenses", value: expenses, color: "bg-violet-500", text: "text-white" },
    { label: "Buffer", value: bufferAmt, color: "bg-rose-500", text: "text-white" },
  ].filter(s => s.value > 0);

  if (hasZeroIncome) {
    return (
      <div className="card p-8 text-center">
        <p className="text-3xl mb-3">👋</p>
        <p className="font-semibold text-gray-900">Set your target income to see your rate</p>
        <p className="text-sm text-gray-500 mt-1">Enter how much you want to take home — we&apos;ll handle taxes, benefits, and buffer.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 print:space-y-3">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#5e6ad2] via-[#4f46e5] to-[#3730a3] rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden print:bg-white print:text-gray-900 print:border print:shadow-none">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl print:hidden" />
        <div className="absolute inset-0 opacity-[0.07] print:hidden" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="relative text-center">
          <p className="text-white/80 print:text-gray-500 text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">Your target rate</p>
          <p className="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums">{formatCurrency(animatedRate)}/hr</p>
          <p className="mt-2.5 text-white/80 print:text-gray-600 text-sm">
            Minimum viable: <span className="font-semibold text-white print:text-gray-900">{formatRate(results.minimumHourlyRate)}</span>
            <span className="mx-2 opacity-50">·</span>
            W-2 equivalent: <span className="font-semibold text-white print:text-gray-900">{formatCurrency(results.employedEquivalentSalary)}/yr</span>
          </p>
          {deltaPct > 0 && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 print:bg-amber-50 print:text-amber-800 print:border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 print:bg-amber-500" /> You need <span className="font-bold">+{deltaPct}%</span> over salary to cover real costs
            </p>
          )}
        </div>
        {/* Pill chips */}
        <div className="relative mt-6 grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Per day (8h)", value: formatCurrency(results.dayRate) },
            { label: "Per week", value: formatCurrency(results.weeklyRate) },
            { label: "Per month", value: formatCurrency(results.monthlyRetainer) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/15 backdrop-blur rounded-2xl py-3.5 border border-white/15 print:bg-[#f8f9ff] print:border-[#eef2ff]">
              <p className="text-[10px] uppercase tracking-widest text-white/80 print:text-gray-500 font-semibold">{label}</p>
              <p className="text-[15px] font-bold text-white print:text-gray-900 mt-0.5">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Billable hours bar */}
      <div className="card p-4">
        <div className="flex items-center justify-between gap-3 mb-2">
          <p className="text-sm font-semibold text-gray-900">Billable time</p>
          <p className="text-xs font-medium px-2 py-1 rounded-full bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe]">{billPct}% of a 40h week year</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#5e6ad2] to-[#4338ca] rounded-full transition-all duration-700" style={{ width: `${billPct}%` }} />
          </div>
          <span className="text-xs font-bold text-gray-700 tabular-nums w-10 text-right">{billPct}%</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500">
          <span className="px-2 py-1 bg-[#f8f9ff] rounded-full border border-[#eef2ff]">{annualHours.toLocaleString()}h / yr</span>
          <span className="px-2 py-1 bg-amber-50 rounded-full border border-amber-100 text-amber-800">{52 - inputs.weeksWorkedPerYear} wks off</span>
          <span className="px-2 py-1 bg-[#f8f9ff] rounded-full border border-[#eef2ff]">{40 - inputs.billableHoursPerWeek}h/wk non-billable</span>
        </div>
      </div>

      {/* Employee vs Freelancer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="card p-5">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Employee equivalent</p>
          <p className="text-2xl font-bold text-gray-900 mt-1 tabular-nums">{formatCurrency(results.employedEquivalentSalary)}/yr</p>
          <p className="text-xs text-gray-500 mt-1">What an employer would pay with payroll tax + benefits (~35%).</p>
          {vsSalaryPct > 0 && <p className="mt-2 text-xs font-medium text-gray-700">≈ +{vsSalaryPct}% over your take-home</p>}
          <ul className="mt-3 space-y-1 text-xs text-gray-600">
            <li>• Employer payroll tax ~7.65%</li>
            <li>• Benefits & insurance ~20–30%</li>
            <li>• Paid leave, equipment, overhead</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#c7d2fe] bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff] p-5 shadow-sm">
          <p className="text-[11px] uppercase tracking-widest text-[#4338ca] font-semibold">Your freelance rate</p>
          <p className="text-2xl font-bold text-[#312e81] mt-1 tabular-nums">{formatRate(results.targetHourlyRate)}</p>
          <p className="text-xs text-[#4338ca]/70 mt-1">Covers taxes, benefits, expenses & risk — nothing hidden.</p>
          <ul className="mt-3 space-y-1 text-xs text-[#312e81]/80">
            <li>• Taxes: {formatCurrency(results.annualTaxes)}/yr</li>
            <li>• Benefits: {formatCurrency(results.annualBenefits)}/yr</li>
            <li>• Expenses: {formatCurrency(results.annualBusinessExpenses)}/yr</li>
          </ul>
        </div>
      </div>

      {/* Proposal */}
      <div className="card p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-sm font-semibold text-gray-900">Client proposal preview</p>
          <div className="flex gap-1.5">
            <button onClick={copyProposal} className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full hover:bg-black transition-colors font-medium">
              {copiedProposal ? "Copied!" : "Copy"}
            </button>
            <button onClick={shareProposal} className="text-xs px-3 py-1.5 bg-white border border-[#eef2ff] text-gray-700 rounded-full hover:bg-[#f8f9ff] transition-colors font-medium">
              {shared ? "Shared!" : "Share"}
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed bg-[#f8f9ff] rounded-xl p-3.5 border border-[#eef2ff]">{proposal}</p>
        <p className="text-[11px] text-gray-400 mt-2">Paste into proposals, invoices, or rate sheets. Link shares your exact inputs via URL.</p>
      </div>

      {/* Cost breakdown — stacked bar + legend */}
      <details className="card p-5 group open:shadow-md transition-shadow" open>
        <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between list-none select-none">
          Annual cost breakdown
          <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </summary>
        {/* Stacked bar */}
        <div className="mt-4 h-4 w-full rounded-full overflow-hidden flex bg-gray-100 border border-[#eef2ff]">
          {seg.map((s) => (
            <div key={s.label} className={`${s.color} h-full transition-all`} style={{ width: `${(s.value / total) * 100}%` }} title={`${s.label}: ${formatCurrency(s.value)}`} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {seg.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 text-xs">
              <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} /> <span className="text-gray-600">{s.label}</span> <span className="font-semibold text-gray-900">{formatCurrency(s.value)}</span> <span className="text-gray-400">({Math.round((s.value / total) * 100)}%)</span>
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="p-3 bg-[#f8f9ff] rounded-xl border border-[#eef2ff]"><p className="text-gray-500 text-xs font-medium">Business expenses</p><p className="font-bold text-gray-900 text-lg tabular-nums">{formatCurrency(results.annualBusinessExpenses)}</p></div>
          <div className="p-3 bg-[#f8f9ff] rounded-xl border border-[#eef2ff]"><p className="text-gray-500 text-xs font-medium">Estimated taxes</p><p className="font-bold text-gray-900 text-lg tabular-nums">{formatCurrency(results.annualTaxes)}</p></div>
          <div className="p-3 bg-[#f8f9ff] rounded-xl border border-[#eef2ff]"><p className="text-gray-500 text-xs font-medium">Benefits (health + retirement)</p><p className="font-bold text-gray-900 text-lg tabular-nums">{formatCurrency(results.annualBenefits)}</p></div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#eef2ff] flex justify-between font-bold text-gray-900"><span>Total needed (with buffer)</span><span className="tabular-nums">{formatCurrency(results.totalAnnualCosts)}</span></div>
      </details>
    </div>
  );
}
