"use client";

import Image from "next/image";

import { Button } from "@lib/components/client";
import { useBookFullError } from "@lib/hooks";

import { ErrorImage } from "./_assets";

const GlobalErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const { message } = useBookFullError({ error });

  return (
    <section className="w-full h-full relative flex flex-col items-center justify-center select-none">
      <span className="w-full absolute top-[10%] flex flex-col gap-[1.2rem] items-center">
        <p className="text-[3rem] font-semibold bg-[#ffffff90] px-[2rem] py-[0.2rem] rounded-[5rem]">{message}</p>
        <p className="text-[1.8rem] text-gray_400 bg-[#ffffff90] px-[1.2rem] py-[0.2rem] rounded-[5rem]">
          잠시 후에 다시 시도해주세요.
        </p>
      </span>

      <Image
        className="w-full pointer-events-none"
        src={ErrorImage}
        alt="error"
      />

      <Button
        className="absolute bottom-[10%] w-[92%] h-[5.7rem] rounded-[6rem] bg-main text-white text-[1.8rem] font-semibold"
        onClick={reset}
      >
        다시 시도
      </Button>
    </section>
  );
};

export default GlobalErrorPage;
