"use client";

import { MouseEvent } from "react";

import { ButtonProps } from "./Button.type";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    onClick(event);
  };

  return (
    <motion.button
      className={twMerge(
        "relative text-[1.6rem] font-semibold border-2 border-none rounded-[1rem] py-[1rem] px-[1.2rem] overflow-hidden cursor-pointer select-none",
        className,
      )}
      onClick={handleClick}
      whileTap={{ scale: "0.98" }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
