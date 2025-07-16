"use client";

import { Step } from "@lib/containers/client";

import { SignupForm, SignupHeader, SignupStepOne } from "./_components";

const SignupPage = () => {
  return (
    <section className="w-full h-full relative">
      <Step>
        <SignupHeader />

        <SignupForm>
          <Step.Content contentList={[SignupStepOne]} />
        </SignupForm>
      </Step>
    </section>
  );
};

export default SignupPage;
