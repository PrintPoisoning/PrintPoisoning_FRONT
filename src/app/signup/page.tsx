"use client";

import { Input, Toggle } from "@lib/components/client";
import useToggle from "@lib/components/client/Toggle/hooks/useToggle";
import { BackIcon } from "@lib/components/server";

const SignupPage = () => {
  const { checked, onChange } = useToggle({ initialState: false });

  return (
    <div>
      <BackIcon />
      <Toggle
        checked={checked}
        onChange={onChange}
      />
      <Input
        label="닉네임"
        className="h-20"
        placeholder="닉네임"
      />
    </div>
  );
};

export default SignupPage;
