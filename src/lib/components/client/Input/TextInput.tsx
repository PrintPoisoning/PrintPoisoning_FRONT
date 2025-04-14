"use client";

import { forwardRef } from "react";

import { InputProps } from "./TextInput.type";

import { twMerge } from "tailwind-merge";

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, placeholder, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-col gap-[0.8rem]">
        <input
          ref={ref}
          placeholder={placeholder}
          className={twMerge(
            "w-full text-[1.6rem] px-8 outline-none bg-[#F8F8F8] text-gray_900 placeholder:text-gray_300 placeholder:text-[1.6rem] rounded-full",
            className,
          )}
          {...rest}
        />

        {error && <p className="px-4 text-[1rem] text-toast_danger">{error}</p>}
      </div>
    );
  },
);

export default TextInput;
