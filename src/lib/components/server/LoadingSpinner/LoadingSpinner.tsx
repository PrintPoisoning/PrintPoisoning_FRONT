import React from "react";

import { LoadingSpinnerProps } from "./LoadingSpinner.type";

import { twMerge } from "tailwind-merge";

const LoadingSpinner = ({ size = "100%", wight = "0.6rem", color = "main" }: LoadingSpinnerProps) => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className={twMerge(
          "w-full h-full rounded-[100%] border-transparent animate-loading_spinner",
          color === "white" && "border-t-white",
          color === "main" && "border-t-main",
        )}
        style={{
          borderWidth: wight,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
