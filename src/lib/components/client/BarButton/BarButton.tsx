import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.type";

import { twMerge } from "tailwind-merge";

const BarButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <div className="w-full max-w-layout flex justify-center items-center absolute bottom-[10rem]">
      <Button
        {...rest}
        className={twMerge(
          "w-[90%] h-[7.2rem] flex items-center justify-center gap-[1.6rem] bg-main rounded-[6rem] text-[1.6rem] font-semibold select-none",

          className,
        )}
      >
        {children}
      </Button>
    </div>
  );
};

export default BarButton;
