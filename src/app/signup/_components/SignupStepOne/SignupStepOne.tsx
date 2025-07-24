"use client";

import { useFormContext } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

import { Button, TextInput, ToggleInput } from "@lib/components/client";
import { LoadingSpinner } from "@lib/components/server";

import { useCheckNickname } from "./_hooks";

import { twMerge } from "tailwind-merge";

const SignupStepOne = () => {
  const {
    register,
    setValue,
    setError,
    watch,
    getValues,
    clearErrors,
    formState: { errors },
  } = useFormContext<SignupFormValues>();

  const { checkNickname, checkNicknameChange, isCheckingPending } = useCheckNickname({
    getValues,
    setValue,
    clearErrors,
    setError,
  });

  return (
    <article className="w-full h-full p-[2rem] flex items-center flex-col gap-[3rem]">
      <div className="w-full flex flex-col gap-4">
        <label className="text-[1.6rem] font-medium text-gray_500 pl-[1rem]">닉네임</label>

        <div className="w-full h-[5rem] flex items-center gap-[1rem]">
          <TextInput
            {...register("nickname", {
              onChange: checkNicknameChange,
              required: "닉네임을 입력해주세요!",
              disabled: isCheckingPending,
            })}
            className="h-[5rem]"
          />

          <Button
            className={twMerge(
              "w-[10rem] h-full text-nowrap bg-main text-white flex items-center justify-center",
              "disabled:bg-gray_300 disabled:cursor-default",
            )}
            onClick={checkNickname}
            disabled={watch("isCheckNickname") || isCheckingPending}
          >
            {!isCheckingPending && "중복 확인"}

            {isCheckingPending && (
              <LoadingSpinner
                size="2.6rem"
                wight="0.5rem"
                color="white"
              />
            )}
          </Button>
        </div>

        <p className="w-full h-[2.4rem] px-[1rem] flex items-center text-[1.6rem] text-main font-medium select-none">
          {errors.nickname?.message ?? ""}
        </p>
      </div>

      <div className="w-full pl-[1rem] flex flex-col gap-[1rem]">
        <label className="text-[1.6rem] font-medium text-gray_500">프로필 공개 여부</label>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[1.6rem]">다른 사용자에게 공개하기</p>
            <p className="text-[1.4rem]">공개 허용 시 모든 사용자가 프로필을 볼 수 있습니다.</p>
          </div>

          <ToggleInput
            name="isPublic"
            checked={!!watch("isPublic")}
            onChange={e => setValue("isPublic", e.target.checked)}
          />
        </div>
      </div>
    </article>
  );
};

export default SignupStepOne;
