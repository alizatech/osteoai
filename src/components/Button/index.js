import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};

const variants = {
  fill: {
    indigo_600: "bg-indigo-600 text-white-a700",
    deep_purple_a700: "bg-deep_purple-a700 text-white-a700",
    blue_gray_100_04: "bg-blue_gray-100_04 text-blue_gray-900",
    blue_gray_50: "bg-blue_gray-50",
  },
  outline: {
    deep_purple_a700:
      "border-deep_purple-a700 border-[1.74px] border-solid text-deep_purple-a700",
  },
};

const sizes = {
  xs: "h-[36px] px-[14px] text-[20px]",
  "4xl": "h-[132px] pl-[7] pr-[34px] text-[32px]",
  xl: "h-[52px] px-[34px] text-[17px]",
  md: "h-[40px] px-[12px] text-[16px]",
  "3xl": "h-[66px] px-[34px] text-[20px]",
  lg: "h-[46px] px-[34px] text-[18px]",
  sm: "h-[40px] px-1",
  "2xl": "h-[60px] px-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "2xl",
  color = "indigo_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant][color]}`}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf([
    "xs",
    "4xl",
    "xl",
    "md",
    "3xl",
    "lg",
    "sm",
    "2xl",
  ]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_600",
    "deep_purple_a700",
    "blue_gray_100_04",
    "blue_gray_50",
  ]),
};

export { Button };
