"use client";

import { Button } from "@lib/components/client";
import { useBookFullError } from "@lib/hooks";

const GlobalErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const { message } = useBookFullError({ error });

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <p>{message}</p>
      <p>잠시 후 다시 시도해주세요.</p>

      <Button onClick={reset}>다시 시도</Button>
    </section>
  );
};

export default GlobalErrorPage;
