export interface CalculatorInputs {
  desiredAnnualIncome: number;
  billableHoursPerWeek: number;
  weeksWorkedPerYear: number;
  monthlyBusinessExpenses: number;
  annualTaxRate: number;
  healthInsuranceMonthly: number;
  retirementContributionMonthly: number;
  riskBufferPercent: number;
}

export interface CalculatorResults {
  minimumHourlyRate: number;
  targetHourlyRate: number;
  dayRate: number;
  weeklyRate: number;
  monthlyRetainer: number;
  annualBusinessExpenses: number;
  annualTaxes: number;
  annualBenefits: number;
  totalAnnualCosts: number;
  employedEquivalentSalary: number;
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

  const annualBusinessExpenses = monthlyBusinessExpenses * 12;
  const annualBenefits = (healthInsuranceMonthly + retirementContributionMonthly) * 12;
  const preTaxAnnualNeeded = desiredAnnualIncome + annualBusinessExpenses + annualBenefits;
  const grossAnnualNeeded = preTaxAnnualNeeded / (1 - annualTaxRate);
  const bufferedAnnualNeeded = grossAnnualNeeded * (1 + riskBufferPercent / 100);
  const annualBillableHours = billableHoursPerWeek * weeksWorkedPerYear;
  const targetHourlyRate = bufferedAnnualNeeded / annualBillableHours;
  const minimumHourlyRate = (annualBusinessExpenses + annualBenefits) / (1 - annualTaxRate) / annualBillableHours;
  const dayRate = targetHourlyRate * 8;
  const weeklyRate = targetHourlyRate * billableHoursPerWeek;
  const monthlyRetainer = weeklyRate * 4.33;
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
  "eu-freelancer": {
    desiredAnnualIncome: 75000,
    billableHoursPerWeek: 28,
    weeksWorkedPerYear: 45,
    monthlyBusinessExpenses: 350,
    annualTaxRate: 0.30,
    healthInsuranceMonthly: 200,
    retirementContributionMonthly: 600,
    riskBufferPercent: 12,
  },
  "agency-owner": {
    desiredAnnualIncome: 180000,
    billableHoursPerWeek: 20,
    weeksWorkedPerYear: 46,
    monthlyBusinessExpenses: 1200,
    annualTaxRate: 0.32,
    healthInsuranceMonthly: 800,
    retirementContributionMonthly: 1500,
    riskBufferPercent: 20,
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
