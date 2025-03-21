import { IconCommonProps } from "../Icon.type";

const MenuBookIcon = ({
  size = "3.2rem",
  fill = "black",
  ...rest
}: IconCommonProps) => {
  return (
    <svg
      width={"2.7rem"}
      height={size}
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.627631 0.907866C7.17601 -1.46926 11.9139 1.3726 13.5 3.14964C15.0861 1.3726 19.824 -1.46931 26.3724 0.907816C26.7545 1.04655 27 1.41541 27 1.822V8.64958V15.1496C27 15.7019 26.5527 16.1489 26.0007 16.167C22.5449 16.2805 16.4604 16.9787 13.5 19.1496C10.5396 16.9787 4.45512 16.2806 0.999332 16.1671C0.447345 16.1489 0 15.7019 0 15.1496V1.82204C0 1.41546 0.24545 1.0466 0.627631 0.907866Z"
        fill={fill}
      />
    </svg>
  );
};

export default MenuBookIcon;
