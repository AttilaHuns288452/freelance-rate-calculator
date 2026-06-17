"use client";

import { CalculatorResults } from "@/lib/calculations";

interface ResultCardProps {
  results: CalculatorResults;
  formatCurrency: (amount: number) => string;
  formatRate: (rate: number) => string;
}

export default function ResultCard({ results, formatCurrency, formatRate }: ResultCardProps) {
  return (
    <div className="space-y-6">
      {/* Primary Rate - Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
        <div className="text-center">
          <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">Your Target Hourly Rate</p>
          <p className="text-5xl md:text-6xl font-bold">{formatRate(results.targetHourlyRate)}</p>
          <p className="mt-2 text-blue-200 text-base">
            Minimum viable: {formatRate(results.minimumHourlyRate)} •{" "}
            Equivalent W-2 salary: {formatCurrency(results.employedEquivalentSalary)}/yr
          </p>
        </div>
      </div>

      {/* Rate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Day Rate (8hrs)", value: results.dayRate, format: formatCurrency },
          { label: "Weekly Rate", value: results.weeklyRate, format: formatCurrency },
          { label: "Monthly Retainer", value: results.monthlyRetainer, format: formatCurrency },
          { label: "Annual Gross Needed", value: results.totalAnnualCosts, format: formatCurrency },
        ].map(({ label, value, format }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{format(value)}</p>
          </div>
        ))}
      </div>

      {/* Cost Breakdown */}
      <details className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between">
          Annual Cost Breakdown
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Business Expenses</p>
            <p className="font-semibold text-gray-900">{formatCurrency(results.annualBusinessExpenses)}</p>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Estimated Taxes</p>
            <p className="font-semibold text-gray-900">{formatCurrency(results.annualTaxes)}</p>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Benefits (Health + Retirement)</p>
            <p className="font-semibold text-gray-900">{formatCurrency(results.annualBenefits)}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between font-semibold">
          <span>Total Annual Cost</span>
          <span>{formatCurrency(results.totalAnnualCosts)}</span>
        </div>
      </details>
    </div>
  );
}