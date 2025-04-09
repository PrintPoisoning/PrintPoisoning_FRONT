"use client";

import { Button } from "@lib/components/client";

const globalErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <p>에러가 발생했습니다.</p>
      <p>{error.toString()}</p>

      <Button onClick={reset}>다시 시도</Button>
    </section>
  );
};

export default globalErrorPage;
