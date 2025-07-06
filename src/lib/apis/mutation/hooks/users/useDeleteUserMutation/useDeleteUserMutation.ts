import { useToast } from "@lib/hooks";
import { deleteUser } from "@lib/service/user/user";

import { useMutation } from "@tanstack/react-query";

const useDeleteUserMutation = () => {
  const { createToast } = useToast();

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      createToast("회원탈퇴가 완료되었습니다.");
    },
  });
};

export default useDeleteUserMutation;
