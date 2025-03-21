"use client";

import { useMemo } from "react";

const useToastVariant = () => {
  const toastLayout = useMemo(
    () => ({
      close: {
        translateX: "100%",
        scale: 0.5,
        opacity: 0,
      },
      show: {
        translateX: "0%",
        scale: 1,
        opacity: 1,
      },
    }),
    [],
  );

  return {
    toastLayout,
  };
};

export default useToastVariant;
