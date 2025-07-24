import { MouseEventHandler, useState } from "react";

import { useCheckNicknameMutation } from "@lib/apis";

import { UseCheckNicknameProps } from "./useCheckNickname.type";

const useCheckNickname = ({ getValues, setValue, clearErrors, setError }: UseCheckNicknameProps) => {
  const { mutate: checkNicknameMutate } = useCheckNicknameMutation();

  const [saveNickname, setSaveNickname] = useState("");

  const checkNickname: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    const newNickname = getValues("nickname");

    checkNicknameMutate(
      { nickname: newNickname },
      {
        onSuccess: ({ nickname, isAvailable }) => {
          if (!isAvailable) {
            setError("nickname", { message: "이미 존재하는 닉네임입니다." });
            setValue("isCheckNickname", false);
            return;
          }

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
