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
  { key: "desiredAnnualIncome", label: "Desired Annual Take-Home", suffix: "/yr", step: 5000, min: 0 },
  { key: "billableHoursPerWeek", label: "Billable Hours/Week", suffix: "hrs", step: 1, min: 1, max: 40 },
  { key: "weeksWorkedPerYear", label: "Weeks Worked/Year", suffix: "wks", step: 1, min: 1, max: 52 },
  { key: "monthlyBusinessExpenses", label: "Monthly Business Expenses", suffix: "/mo", step: 50, min: 0 },
  { key: "annualTaxRate", label: "Effective Tax Rate", suffix: "%", step: 1, min: 0, max: 50, isPercent: true },
  { key: "healthInsuranceMonthly", label: "Health Insurance (Monthly)", suffix: "/mo", step: 50, min: 0 },
  { key: "retirementContributionMonthly", label: "Retirement Contribution (Monthly)", suffix: "/mo", step: 50, min: 0 },
  { key: "riskBufferPercent", label: "Risk Buffer", suffix: "%", step: 1, min: 0, max: 50, isPercent: true },
];

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
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FIELD_CONFIG.map(({ key, label, suffix, step, min, max, isPercent }) => (
            <div key={key} className="space-y-1">
              <label htmlFor={key} className="block text-sm text-gray-600">
                {label}
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
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sponsored</h2>
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      )}

      {/* Methodology / SEO Content */}
      <details className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm no-print">
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