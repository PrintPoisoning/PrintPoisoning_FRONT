"use client";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

const SignupForm = ({ children }: PropsWithChildren) => {
  const method = useForm<SignupFormValues>({
    defaultValues: {
      nickname: "",
      isPublic: false,
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...method}>
      <form
        className="w-full h-full"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default SignupForm;
