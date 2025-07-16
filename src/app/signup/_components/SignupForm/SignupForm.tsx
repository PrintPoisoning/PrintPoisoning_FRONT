"use client";

import { useSession } from "next-auth/react";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

import { signInWithKakao, useSignupMutation } from "@lib/apis";
import { BarButton } from "@lib/components/client";

const SignupForm = ({ children }: PropsWithChildren) => {
  const { data } = useSession();

  const { mutate: signup } = useSignupMutation();

  const method = useForm<SignupFormValues>({
    defaultValues: {
      nickname: "",
      isPublic: false,
    },
  });

  const onSubmit = ({ nickname, isPublic }: SignupFormValues) => {
    if (!data || !data.ssoToken) {
      return;
    }

    signup(
      { nickname, isPublic, token: data.ssoToken },
      {
        onSuccess: () => {
          signInWithKakao({ callbackUrl: "/signup/welcome" });
        },
      },
    );
  };

  return (
    <FormProvider {...method}>
      <form
        className="w-full h-full"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        {children}

        <BarButton>가입하기</BarButton>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
