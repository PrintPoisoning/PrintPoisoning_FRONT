"use client";

import { useRouter } from "next/navigation";

import { use } from "react";

import { StepContext } from "@lib/containers/client";

const useSignupHeaderRoute = () => {
  const router = useRouter();
  const { prevStep, step } = use(StepContext);

  const handleRouterBack = () => {
    if (step === 0) {
      return router.push("/login");
    }

    prevStep();
  };

  return handleRouterBack;
};

export default useSignupHeaderRoute;
