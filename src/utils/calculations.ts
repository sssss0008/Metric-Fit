/**
 * Brzycki Formula: 1RM = Weight * (36 / (37 - Reps))
 * or the version requested: Weight * (1 + Reps / 30)
 */
export const estimate1RM = (weight: number, reps: number): number => {
  if (reps <= 0) return 0;
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
};

export const kgToLbs = (kg: number): number => kg * 2.20462;
export const lbsToKg = (lbs: number): number => lbs / 2.20462;

export const formatValue = (val: number, unit: 'metric' | 'imperial'): string => {
  return `${val.toFixed(1)} ${unit === 'metric' ? 'kg' : 'lbs'}`;
};
