import { IconCommonProps } from "../Icon.type";

const MenuCloverIcon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconCommonProps) => {
  return (
    <svg
      width="3.5rem"
      height={size}
      viewBox="0 0 35 35"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g opacity="0.7">
        <ellipse
          cx="21.4453"
          cy="13.4215"
          rx="6.68904"
          ry="6.82757"
          transform="rotate(45 21.4453 13.4215)"
          fill={fill}
        />
        <ellipse
          cx="13.6375"
          cy="13.5015"
          rx="6.82757"
          ry="6.68904"
          transform="rotate(-45 13.6375 13.5015)"
          fill={fill}
        />
        <ellipse
          cx="13.4215"
          cy="21.4453"
          rx="6.68904"
          ry="6.82757"
          transform="rotate(45 13.4215 21.4453)"
          fill={fill}
        />
        <ellipse
          cx="21.4984"
          cy="21.3624"
          rx="6.82757"
          ry="6.68904"
          transform="rotate(-45 21.4984 21.3624)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default MenuCloverIcon;
