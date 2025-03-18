import { IconCommonProps } from "../Icon.type";

const KakaoLogoIcon = ({ size = "3.2rem", fill = "#040001", ...rest }: IconCommonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <ellipse
        cx="11.5"
        cy="9"
        rx="11.5"
        ry="9"
        fill={fill}
      />
      <path
        d="M2.8229 21.3279L4.3688 14.0919L9.25813 17.6758L2.8229 21.3279Z"
        fill={fill}
      />
    </svg>
  );
};

export default KakaoLogoIcon;
