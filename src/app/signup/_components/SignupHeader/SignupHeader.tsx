import { useRouter } from "next/navigation";

import { BackIcon } from "@lib/components/server";

const SignupHeader = () => {
  const router = useRouter();
  return (
    <header className="w-full flex items-center px-4 py-12">
      <button
        onClick={() => router.push("/login")}
        className="p-4"
      >
        <BackIcon />
      </button>
      <h1 className="flex-1 text-size24 font-medium text-center mr-[52px]">
        회원가입
      </h1>
    </header>
  );
};

export default SignupHeader;
