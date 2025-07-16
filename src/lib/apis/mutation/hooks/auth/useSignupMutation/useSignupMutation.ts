import { bookFullSignup } from "@lib/service";

import { useMutation } from "@tanstack/react-query";

const useSignupMutation = () => {
  return useMutation({
    mutationFn: bookFullSignup,
  });
};

export default useSignupMutation;
