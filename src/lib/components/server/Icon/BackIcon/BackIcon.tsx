import { IconCommonProps } from "../Icon.type";

const BackIcon = ({ size = "3.2rem", fill = "black", ...rest }: IconCommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M20 12H4M4 12L10 6M4 12L10 18" />
    </svg>
  );
};

export default BackIcon;
