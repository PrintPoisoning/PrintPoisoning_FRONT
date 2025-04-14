"use client"

import { useRouter } from "next/navigation";

import { BackIcon } from "@lib/components/server";
import Header from "@lib/components/client/Header/Header";

const SignupHeader = () => {
  const router = useRouter();

  return (
      <Header
        title="회원가입"
        leftButton={{
          icon: <BackIcon />,
          onClick: () => router.push("/login")
        }}
      />
  );
};

export default SignupHeader;
