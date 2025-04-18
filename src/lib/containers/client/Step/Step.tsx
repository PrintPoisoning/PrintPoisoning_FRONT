"use client";

import { PropsWithChildren, createContext } from "react";

import { StepContextValue } from "./Step.type";
import { StepContent } from "./components";
import { useStepControl } from "./hooks";

export const StepContext = createContext<StepContextValue>({
  step: 0,
  prevStep: () => {},
  nextStep: () => {},
  setMaxStep: () => {},
});

const Step = ({ children }: PropsWithChildren) => {
  const stepController = useStepControl();

  return <StepContext.Provider value={stepController}>{children}</StepContext.Provider>;
};

Step.Content = StepContent;

export default Step;
