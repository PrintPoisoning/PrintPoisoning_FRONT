"use client";

import { useEffect, useState } from "react";

import { UseToastTimerProps } from "./useToastTimer.type";

const useToastTimer = ({ time }: UseToastTimerProps) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, time);
  }, [time]);

  return isShow;
};

export default useToastTimer;
