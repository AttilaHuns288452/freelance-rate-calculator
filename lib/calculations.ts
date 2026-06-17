export interface CalculatorInputs {
  // Core inputs
  desiredAnnualIncome: number;      // What they want to take home
  billableHoursPerWeek: number;     // Realistic billable hours (not 40)
  weeksWorkedPerYear: number;       // Account for vacation, sick, bench time
  // Expenses
  monthlyBusinessExpenses: number;  // Software, insurance, marketing, etc.
  annualTaxRate: number;            // Effective tax rate (e.g., 0.3 for 30%)
  // Benefits to self-fund
  healthInsuranceMonthly: number;
  retirementContributionMonthly: number;
  // Buffer
  riskBufferPercent: number;        // 10-20% for non-billable admin, client loss
}

export interface CalculatorResults {
  // Hourly rates
  minimumHourlyRate: number;        // Bare minimum to cover costs
  targetHourlyRate: number;         // Includes desired income
  dayRate: number;                  // 8-hour day
  weeklyRate: number;               // 5-day week
  monthlyRetainer: number;          // 4-week month
  // Breakdown
  annualBusinessExpenses: number;
  annualTaxes: number;
  annualBenefits: number;
  totalAnnualCosts: number;
  // Comparisons
  employedEquivalentSalary: number; // What W-2 salary equals this rate
}

export function calculateFreelanceRate(inputs: CalculatorInputs): CalculatorResults {
  const {
    desiredAnnualIncome,
    billableHoursPerWeek,
    weeksWorkedPerYear,
    monthlyBusinessExpenses,
    annualTaxRate,
    healthInsuranceMonthly,
    retirementContributionMonthly,
    riskBufferPercent,
  } = inputs;

  // Annualize expenses
  const annualBusinessExpenses = monthlyBusinessExpenses * 12;
  const annualBenefits = (healthInsuranceMonthly + retirementContributionMonthly) * 12;

  // Total annual costs before taxes
  const preTaxAnnualNeeded = desiredAnnualIncome + annualBusinessExpenses + annualBenefits;

  // Gross up for taxes: if you keep (1 - taxRate), you need preTax / (1 - taxRate)
  const grossAnnualNeeded = preTaxAnnualNeeded / (1 - annualTaxRate);

  // Apply risk buffer
  const bufferedAnnualNeeded = grossAnnualNeeded * (1 + riskBufferPercent / 100);

  // Annual billable hours
  const annualBillableHours = billableHoursPerWeek * weeksWorkedPerYear;

  // Rates
  const targetHourlyRate = bufferedAnnualNeeded / annualBillableHours;
  const minimumHourlyRate = (annualBusinessExpenses + annualBenefits) / (1 - annualTaxRate) / annualBillableHours;

  // Derived rates
  const dayRate = targetHourlyRate * 8;
  const weeklyRate = targetHourlyRate * billableHoursPerWeek;
  const monthlyRetainer = weeklyRate * 4.33;

  // Employed equivalent (add back employer-side costs: payroll tax ~7.65%, benefits ~30%)
  const employedEquivalentSalary = bufferedAnnualNeeded * 1.35;

  return {
    minimumHourlyRate: Math.round(minimumHourlyRate),
    targetHourlyRate: Math.round(targetHourlyRate),
    dayRate: Math.round(dayRate),
    weeklyRate: Math.round(weeklyRate),
    monthlyRetainer: Math.round(monthlyRetainer),
    annualBusinessExpenses: Math.round(annualBusinessExpenses),
    annualTaxes: Math.round(grossAnnualNeeded * annualTaxRate),
    annualBenefits: Math.round(annualBenefits),
    totalAnnualCosts: Math.round(bufferedAnnualNeeded),
    employedEquivalentSalary: Math.round(employedEquivalentSalary),
  };
}

// Presets for common scenarios
export const PRESETS: Record<string, Partial<CalculatorInputs>> = {
  "us-web-dev": {
    desiredAnnualIncome: 120000,
    billableHoursPerWeek: 25,
    weeksWorkedPerYear: 46,
    monthlyBusinessExpenses: 400,
    annualTaxRate: 0.3,
    healthInsuranceMonthly: 450,
    retirementContributionMonthly: 1000,
    riskBufferPercent: 15,
  },
  "us-designer": {
    desiredAnnualIncome: 90000,
    billableHoursPerWeek: 20,
    weeksWorkedPerYear: 44,
    monthlyBusinessExpenses: 300,
    annualTaxRate: 0.28,
    healthInsuranceMonthly: 450,
    retirementContributionMonthly: 500,
    riskBufferPercent: 15,
  },
  "uk-contractor": {
    desiredAnnualIncome: 70000,
    billableHoursPerWeek: 30,
    weeksWorkedPerYear: 46,
    monthlyBusinessExpenses: 350,
    annualTaxRate: 0.25,
    healthInsuranceMonthly: 150,
    retirementContributionMonthly: 400,
    riskBufferPercent: 10,
  },
  "starter-side-hustle": {
    desiredAnnualIncome: 24000,
    billableHoursPerWeek: 10,
    weeksWorkedPerYear: 48,
    monthlyBusinessExpenses: 100,
    annualTaxRate: 0.22,
    healthInsuranceMonthly: 0,
    retirementContributionMonthly: 100,
    riskBufferPercent: 10,
  },
};

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRate(rate: number): string {
  return `${formatCurrency(rate)}/hr`;
}