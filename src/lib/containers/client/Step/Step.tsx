"use client";

import { PropsWithChildren, createContext, useState } from "react";

import { StepContextValue } from "./Step.type";
import { StepContent } from "./components";

export const StepContext = createContext<StepContextValue>({
  step: 0,
  prevStep: () => {},
  nextStep: () => {},
  setMaxStep: () => {},
});

const Step = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);

  const prevStep = () =>
    setStep(prev => {
      if (prev === 0) return prev;

      return prev - 1;
    });

  const nextStep = () =>
    setStep(prev => {
      if (prev === maxStep) return prev;

      return prev + 1;
    });

  const handleMaxStep = (maxCount: number) => setMaxStep(maxCount);

  return (
    <StepContext.Provider value={{ step: step, nextStep, prevStep, setMaxStep: handleMaxStep }}>
      {children}
    </StepContext.Provider>
  );
};

Step.Content = StepContent;

export default Step;
