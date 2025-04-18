"use client";

import { Header } from "@lib/components/client";
import { BackIcon } from "@lib/components/server";

import { useSignupHeaderRoute } from "./hooks";

const SignupHeader = () => {
  const handleRouterBack = useSignupHeaderRoute();

  return (
    <Header
      title="회원가입"
      leftButton={{
        icon: <BackIcon />,
        onClick: handleRouterBack,
      }}
    />
  );
};

export default SignupHeader;
