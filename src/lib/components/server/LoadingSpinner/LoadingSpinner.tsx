import React from "react";

import { LoadingSpinnerProps } from "./LoadingSpinner.type";

import { twMerge } from "tailwind-merge";

const LoadingSpinner = ({ size = "100%", wight = "0.6rem" }: LoadingSpinnerProps) => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className={twMerge("w-full h-full rounded-[100%] border-transparent border-t-main animate-loading_spinner")}
        style={{
          borderWidth: wight,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
