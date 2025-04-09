"use client";

import { FallbackProps } from "react-error-boundary";

import { Button } from "@lib/components/client";

const CustomErrorUI = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log("error?? : ", error);

  return (
    <article className="w-full h-full flex flex-col items-center justify-center border-2">
      <p className="text-2xl font-bold">{error.toString()}</p>
      <Button
        className="bg-main text-white"
        onClick={resetErrorBoundary}
      >
        다시 시도
      </Button>
    </article>
  );
};

export default CustomErrorUI;
