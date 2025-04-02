import { Button, Input, Toggle } from "@lib/components/client";
import { useToggle } from "@lib/components/client/Toggle/hooks";

const SignupForm = () => {
  const { checked, onChange } = useToggle({ initialState: false });

  return (
    <form className="w-[85%] mx-auto flex flex-col gap-20 h-full">
      <div className="flex flex-col gap-4">
        <label className="text-[1.4rem] font-medium text-gray_500 pl-4">
          닉네임
        </label>
        <Input
          className="h-20"
          placeholder="닉네임"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="text-[1.4rem] font-medium text-gray_500 pl-4">
          프로필 공개 여부
        </label>
        <div className="flex items-center justify-between pl-4">
          <div className="flex flex-col gap-1">
            <p className="text-[1.4rem]">다른 사용자에게 공개하기</p>
            <p className="text-[1rem]">
              공개 허용 시 모든 사용자가 프로필을 볼 수 있습니다.
            </p>
          </div>
          <Toggle
            checked={checked}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="mt-auto mb-[112px]">
        <Button className="bg-main text-white rounded-full w-full h-20">
          가입하기
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
