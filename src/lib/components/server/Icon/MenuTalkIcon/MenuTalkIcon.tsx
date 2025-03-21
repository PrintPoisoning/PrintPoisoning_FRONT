import { IconCommonProps } from "../Icon.type";

const MenuTalkIcon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconCommonProps) => {
  return (
    <svg
      width="24"
      height={size}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <ellipse
        cx="12"
        cy="9.93103"
        rx="12"
        ry="9.93103"
        fill={fill}
      />
      <path
        d="M22.1565 19.2474L18.9472 18.1776C18.2341 17.9399 18.0283 17.03 18.5697 16.5086L20.7916 14.3691C21.3284 13.8521 22.2218 14.083 22.441 14.7953L23.4285 18.0046C23.6677 18.782 22.9281 19.5046 22.1565 19.2474Z"
        fill={fill}
      />
    </svg>
  );
};

export default MenuTalkIcon;
