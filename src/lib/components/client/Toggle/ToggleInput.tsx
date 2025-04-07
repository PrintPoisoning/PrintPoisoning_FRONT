"use client";

import { forwardRef } from "react";

import { ToggleProps } from "./ToggleInput.type";

import { twMerge } from "tailwind-merge";

const ToggleInput = forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked, onChange, className, ...rest }, ref) => {
    return (
      <label
        className={twMerge(
          "relative inline-block w-[5.2rem] h-[3.2rem]",
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
          {...rest}
        />
        <div
          className={twMerge(
            "absolute cursor-pointer inset-0 rounded-full transition-all duration-300",
            checked ? "bg-main" : "bg-gray_300",
          )}
        >
          <div
            className={twMerge(
              "absolute w-[2.6rem] h-[2.6rem] bg-white rounded-full transition-all duration-300 shadow-sm top-[0.3rem]",
              checked ? "left-[2.3rem]" : "left-[0.2rem]",
            )}
          />
        </div>
      </label>
    );
  },
);

export default ToggleInput;
