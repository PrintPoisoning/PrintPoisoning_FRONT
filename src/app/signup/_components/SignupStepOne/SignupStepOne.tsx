"use client";

import { useFormContext } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

import { TextInput, ToggleInput } from "@lib/components/client";

const SignupStepOne = () => {
  const { register, setValue, watch } = useFormContext<SignupFormValues>();

  return (
    <article className="w-full h-full p-[2rem] flex items-center flex-col gap-[5rem]">
      <div className="w-full flex flex-col gap-4">
        <label className="text-[1.6rem] font-medium text-gray_500 pl-[1rem]">닉네임</label>

        <TextInput
          {...register("nickname")}
          className="h-[5rem]"
        />
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
