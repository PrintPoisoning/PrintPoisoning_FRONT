"use client"

import { Button, TextInput, ToggleInput } from "@lib/components/client";
import { useForm, Controller } from "react-hook-form";

const SignupForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nickname: '',
      isPublic: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="w-[90%] mx-auto flex justify-center items-center flex-col gap-20 h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col gap-4">
        <label className="text-[1.6rem] font-medium text-gray_500 pl-4">
          닉네임
        </label>
        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              className="h-20"
              placeholder="닉네임"
            />
          )}
        />
      </div>

      <div className="w-full flex flex-col gap-4">
        <label className="text-[1.6rem] font-medium text-gray_500 pl-4">
          프로필 공개 여부
        </label>
        <div className="flex items-center justify-between pl-4">
          <div className="flex flex-col gap-1">
            <p className="text-[1.6rem]">다른 사용자에게 공개하기</p>
            <p className="text-[1.4rem]">
              공개 허용 시 모든 사용자가 프로필을 볼 수 있습니다.
            </p>
          </div>
          <Controller
            name="isPublic"
            control={control}
            render={({ field }) => (
              <ToggleInput
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        </div>
      </div>

      <Button className="bg-main text-white rounded-[6rem] w-full h-[5.7rem] mt-auto mb-[18.5rem] text-[1.6rem] font-semibold">
        가입하기
      </Button>
    </form>
  );
};

export default SignupForm;
