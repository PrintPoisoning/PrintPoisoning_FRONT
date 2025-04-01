"use client";

import { SignupForm, SignupHeader } from "./_components";

const SignupPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <SignupHeader />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
