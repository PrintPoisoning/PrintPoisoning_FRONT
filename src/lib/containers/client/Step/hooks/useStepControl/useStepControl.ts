"use client";

import { useCallback, useState } from "react";

const useStepControl = () => {
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);

  const prevStep = useCallback(
    () =>
      setStep(prev => {
        if (prev === 0) return prev;

        return prev - 1;
      }),
    [],
  );

  const nextStep = useCallback(
    () =>
      setStep(prev => {
        if (prev === maxStep) return prev;

        return prev + 1;
      }),
    [maxStep],
  );

  const handleMaxStep = (maxCount: number) => setMaxStep(maxCount);

  return { step, prevStep, nextStep, setMaxStep: handleMaxStep };
};

export default useStepControl;
