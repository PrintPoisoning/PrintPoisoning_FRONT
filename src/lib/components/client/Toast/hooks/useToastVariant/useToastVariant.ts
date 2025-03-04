"use client";

import { useMemo } from "react";

import { UseToastVariantProps } from "./useToastVariant.type";

const useToastVariant = ({ deleteTime }: UseToastVariantProps) => {
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

  const toastProgress = useMemo(
    () => ({
      close: { translateX: "-100%" },
      show: {
        translateX: "0%",
      },
      transition: {
        duration: deleteTime / 1000 + 0.05,
        ease: "linear",
      },
    }),
    [deleteTime],
  );

  return {
    toastLayout,
    toastProgress,
  };
};

export default useToastVariant;
