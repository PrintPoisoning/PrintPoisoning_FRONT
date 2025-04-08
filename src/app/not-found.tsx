"use client";

import { useRouter } from "next/navigation";

import { Button } from "@lib/components/client";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-[1.2rem]">
      <h2 className="text-[2.4rem] font-bold">404 Not Found</h2>
      <p className="text-[1.6rem]">임시 페이지</p>

      <Button
        className="bg-main text-white text-[1.4rem]"
        onClick={() => router.replace("/")}
      >
        홈으로 이동
      </Button>
    </section>
  );
};

export default NotFoundPage;
