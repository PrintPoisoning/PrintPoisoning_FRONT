"use client";

import { use, useEffect, useMemo } from "react";

import { StepContext } from "../../Step";
import { StepContentProps } from "./StepContent.type";

const StepContent = ({ contentList }: StepContentProps) => {
  const { step, setMaxStep } = use(StepContext);

  useEffect(() => {
    setMaxStep(contentList.length - 1);
  }, [contentList, setMaxStep]);

  const Content = useMemo(() => contentList[step], [step, contentList]);

  if (!Content) {
    return null;
  }

  return <Content />;
};

export default StepContent;
