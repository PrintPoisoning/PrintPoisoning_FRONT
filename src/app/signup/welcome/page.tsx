"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

import { BookFullBookImage, BookFullCloverImage, BookFullMascotImage } from "@app/_assets";

import { BarButton } from "@lib/components/client";

import { twMerge } from "tailwind-merge";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <>
      <article className="w-full h-full  flex flex-col items-center relative">
        <span
          className={twMerge(
            "w-full flex flex-col gap-[1rem] p-[6rem] relative border-2 border-red-600",
            "text-size24 font-semibold select-none break-keep",
          )}
        >
          <p>환영해요!</p>

          <span className="leading-[1.3]">
            <p>
              이제부터 <strong className="text-main text-size28">책풀</strong>과 함께
            </p>

            <p>마음껏 책을 풀어나가요.</p>
          </span>

          <Image
            src={BookFullCloverImage}
            alt="clover_login_image"
            sizes="100% 100%"
            className="absolute top-0 right-0 animate-login_up_down_4s"
          />
        </span>

        <Image
          src={BookFullMascotImage}
          alt="mascot_login_image"
          className="absolute bottom-[10rem] animate-login_up_down_8s"
        />

        <Image
          src={BookFullBookImage}
          alt="book_login_image"
          className="absolute bottom-[32rem] left-[14%] animate-login_up_down_6s"
        />
      </article>

      <BarButton onClick={() => router.push("/")}>바로 시작하기</BarButton>
    </>
  );
};

export default WelcomePage;
