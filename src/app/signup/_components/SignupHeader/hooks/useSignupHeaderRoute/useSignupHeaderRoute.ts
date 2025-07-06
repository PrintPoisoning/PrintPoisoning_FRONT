"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { use } from "react";

import { StepContext } from "@lib/containers/client";

const useSignupHeaderRoute = () => {
  const router = useRouter();

  const { prevStep, step } = use(StepContext);

  const handleRouterBack = async () => {
    if (step === 0) {
      await signOut();
      return router.push("/login");
    }

    prevStep();
  };

  return handleRouterBack;
};

export default useSignupHeaderRoute;
