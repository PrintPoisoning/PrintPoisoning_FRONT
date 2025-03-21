import { IconCommonProps } from "../Icon.type";

const MenuUserIcon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconCommonProps) => {
  return (
    <svg
      width="16"
      height={size}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.1579 3.86842C12.1579 6.00489 10.1785 7.73684 7.73685 7.73684C5.29517 7.73684 3.3158 6.00489 3.3158 3.86842C3.3158 1.73195 5.29517 0 7.73685 0C10.1785 0 12.1579 1.73195 12.1579 3.86842Z"
        fill={fill}
      />
      <path
        d="M15.4737 16.3886C15.4737 20.5563 12.0098 21.0002 7.73684 21.0002C3.4639 21.0002 0 20.5563 0 16.3886C0 12.2209 3.4639 8.84229 7.73684 8.84229C12.0098 8.84229 15.4737 12.2209 15.4737 16.3886Z"
        fill={fill}
      />
    </svg>
  );
};

export default MenuUserIcon;
