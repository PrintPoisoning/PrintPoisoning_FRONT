"use client";

import { useToastStore } from "@lib/components/client/Toast/store";

const useToast = () => {
  const { createToast } = useToastStore();

  return { createToast };
};

export default useToast;
