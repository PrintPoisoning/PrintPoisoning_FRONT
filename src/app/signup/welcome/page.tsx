"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

import {
  BookFullBookImage,
  BookFullCloverImage,
  BookFullConfetti_1,
  BookFullConfetti_2,
  BookFullConfetti_3,
  BookFullConfetti_4,
  BookFullConfetti_5,
  BookFullMascotImage,
} from "@app/_assets";

import { BarButton } from "@lib/components/client";

import { twMerge } from "tailwind-merge";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <>
      <article className="w-full h-full  flex flex-col items-center relative">
        <span
          className={twMerge(
            "w-full flex flex-col gap-[1rem] p-[6rem] relative",
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
            className="w-[30%] absolute top-0 right-0 animate-login_up_down_4s"
          />
        </span>

        <Image
          src={BookFullConfetti_1}
          alt="confetti_1_image"
          className="w-[15%] absolute bottom-[65%] left-[24%] animate-login_up_down_8s"
        />

        <Image
          src={BookFullConfetti_2}
          alt="confetti_1_image"
          className="w-[15%] absolute bottom-[62%] right-[20%] animate-login_up_down_4s"
        />

        <Image
          src={BookFullConfetti_3}
          alt="confetti_1_image"
          className="w-[16%] absolute bottom-[46%] left-[6%] animate-login_up_down_6s"
        />

        <Image
          src={BookFullConfetti_4}
          alt="confetti_1_image"
          className="w-[15.5%] absolute bottom-[53%] left-[42.25%] animate-login_up_down_6s"
        />

        <Image
          src={BookFullConfetti_5}
          alt="confetti_1_image"
          className="w-[10%] absolute bottom-[49%] right-[10%] animate-login_up_down_4s"
        />

        <Image
          src={BookFullMascotImage}
          alt="mascot_login_image"
          className="w-[100%] absolute bottom-[8%] animate-login_up_down_8s"
        />

        <Image
          src={BookFullBookImage}
          alt="book_login_image"
          className="w-[24%] absolute bottom-[25%] left-[6%] animate-login_up_down_6s"
        />
      </article>

      <BarButton onClick={() => router.push("/")}>바로 시작하기</BarButton>
    </>
  );
};

export default WelcomePage;
