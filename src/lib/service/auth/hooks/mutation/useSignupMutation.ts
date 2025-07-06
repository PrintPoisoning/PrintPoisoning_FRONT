import { useToast } from "@lib/hooks";

import { useMutation } from "@tanstack/react-query";

import { bookFullSignup } from "../../auth";

const useSignupMutation = () => {
  const { createToast } = useToast();

  return useMutation({
    mutationFn: bookFullSignup,

    onSuccess: () => {
      createToast("회원가입에 성공하셨습니다!");
    },
  });
};

export default useSignupMutation;
