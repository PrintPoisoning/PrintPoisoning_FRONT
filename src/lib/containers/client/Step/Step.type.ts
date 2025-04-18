export interface StepContextValue {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
  setMaxStep: (maxCount: number) => void;
}
