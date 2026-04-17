"use client";

import { FallbackProps } from "react-error-boundary";

import { Button } from "@lib/components/client";
import { useBookFullError } from "@lib/hooks";

const CustomErrorUI = ({ error, resetErrorBoundary }: FallbackProps) => {
  const normalizedError =
    error instanceof Error ? error : new Error(typeof error === "string" ? error : "Unknown error");

  const { message } = useBookFullError({ error: normalizedError });

  return (
    <article className="w-full h-full flex flex-col items-center justify-center gap-[1rem] select-none">
      <p className="text-[1.2rem] font-bold">문제가 발생했어요!</p>
      <p className="text-[1.2rem] font-bold">{message}</p>

      <Button
        className="px-[1rem] py-[0.8rem] bg-main text-[1.2rem] text-white"
        onClick={resetErrorBoundary}
      >
        다시 시도
      </Button>
    </article>
  );
};

export default CustomErrorUI;
