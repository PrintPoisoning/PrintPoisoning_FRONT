"use client";

import { useSession } from "next-auth/react";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

import { signInWithKakao, useSignupMutation } from "@lib/apis";
import { BarButton } from "@lib/components/client";
import { LoadingSpinner } from "@lib/components/server";
import { useToast } from "@lib/hooks";

const SignupForm = ({ children }: PropsWithChildren) => {
  const { data } = useSession();
  const { createToast } = useToast();

  const { mutate: signup, isPending } = useSignupMutation();

  const method = useForm<SignupFormValues>({
    defaultValues: {
      nickname: "",
      isPublic: false,
      isCheckNickname: false,
    },
  });

  const onSubmit = ({ nickname, isPublic, isCheckNickname }: SignupFormValues) => {
    if (!data || !data.ssoToken) {
      return;
    }

    if (!isCheckNickname) {
      method.setError("nickname", { message: "닉네임 중복 확인을 해주세요!" });
      createToast("닉네임 중복 확인을 해주세요!");
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

        <BarButton disabled={!method.watch("isCheckNickname") || isPending}>
          {!isPending && "가입하기"}

          {isPending && (
            <LoadingSpinner
              size="3rem"
              wight="0.5rem"
              color="white"
            />
          )}
        </BarButton>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
