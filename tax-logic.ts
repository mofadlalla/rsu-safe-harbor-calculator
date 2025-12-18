/**
 * IRS SAFE HARBOR CALCULATION ENGINE (2025)
 * * Logic based on IRS Publication 505.
 * High Earners (AGI > $150k) must pay 110% of prior year tax to avoid penalty.
 * Others must pay 100%.
 */

export interface TaxInput {
  priorYearTax: number;       // Form 1040, Line 24
  priorYearAGI: number;       // Form 1040, Line 11
  currentWithholding: number; // From latest Paystub
}

// Helper to handle floating point precision errors
function roundToCents(num: number): number {
  return Math.round(num * 100) / 100;
}

export function calculateSafeHarbor(input: TaxInput) {
  // 1. Determine the Safe Harbor Multiplier
  const isHighEarner = input.priorYearAGI > 150000;
  const multiplier = isHighEarner ? 1.10 : 1.00;

  // 2. Calculate the Target Tax
  const rawTarget = input.priorYearTax * multiplier;
  const safeHarborTarget = roundToCents(rawTarget);

  // 3. Calculate the Gap
  const rawGap = safeHarborTarget - input.currentWithholding;
  const projectedGap = roundToCents(rawGap);
  
  // 4. Determine Status
  const isSafe = projectedGap <= 0;

  return {
    isSafe,
    safeHarborTarget,
    projectedGap: projectedGap > 0 ? projectedGap : 0,
    multiplier
  };
}
