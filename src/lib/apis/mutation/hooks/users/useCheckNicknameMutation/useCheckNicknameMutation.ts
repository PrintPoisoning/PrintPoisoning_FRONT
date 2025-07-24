import { useToast } from "@lib/hooks";
import { checkNickname } from "@lib/service";

import { useMutation } from "@tanstack/react-query";

const useCheckNicknameMutation = () => {
  const { createToast } = useToast();

  return useMutation({
    mutationFn: checkNickname,

    onSuccess: ({ isAvailable }) => {
      if (isAvailable) {
        createToast("사용 가능한 닉네임입니다.");
        return;
      }

      createToast("이미 존재하는 닉네임입니다.");
    },
  });
};

export default useCheckNicknameMutation;
