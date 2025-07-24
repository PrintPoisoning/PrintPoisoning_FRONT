import { MouseEventHandler, useState } from "react";

import { useCheckNicknameMutation } from "@lib/apis";

import { UseCheckNicknameProps } from "./useCheckNickname.type";

const useCheckNickname = ({ getValues, setValue, clearErrors }: UseCheckNicknameProps) => {
  const { mutate: checkNicknameMutate } = useCheckNicknameMutation();

  const [saveNickname, setSaveNickname] = useState("");

  const checkNickname: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    const newNickname = getValues("nickname");

    checkNicknameMutate(
      { nickname: newNickname },
      {
        onSuccess: ({ nickname }) => {
          setSaveNickname(nickname);
          setValue("isCheckNickname", true);
          clearErrors("nickname");
        },
      },
    );
  };

  const checkNicknameChange = () => {
    const newNickname = getValues("nickname");

    if (newNickname === saveNickname) {
      setValue("isCheckNickname", true);
      return;
    }

    setValue("isCheckNickname", false);
  };

  return { checkNickname, checkNicknameChange };
};

export default useCheckNickname;
