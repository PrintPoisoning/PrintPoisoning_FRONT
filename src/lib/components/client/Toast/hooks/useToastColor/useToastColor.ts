"use client";

import { UseToastColorProps } from "./useToastColor.type";

const useToastTypeColor = ({ type }: UseToastColorProps) => {
  switch (type) {
    case "alert":
      return "bg-toast_alert";

    case "safe":
      return "bg-toast_safe";

    case "warning":
      return "bg-toast_warning";

    case "danger":
      return "bg-toast_danger";

    default:
      return "bg-toast_alert";
  }
};

export default useToastTypeColor;
