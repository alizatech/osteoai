import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};

const variants = {
  fill: {
    gray_100_02: "bg-gray-100_02 text-gray-600_01",
    white_A700: "bg-white-A700",
    gray_100_01: "bg-gray-100_01 text-gray-500",
    gray_50: "bg-gray-50",
  },
  outline: {
    blue_gray_100: "border-blue-gray-100 border border-solid",
    gray_800_23: "border-gray-800_23 border border-solid text-gray-800_3a",
  },
};

const sizes = {
  "2xl": "h-[64px] px-3 text-[20px]",
  sm: "h-[42px] px-2.5",
  md: "h-[44px] px-2.5 text-[20px]",
  lg: "h-[56px] px-3",
  xl: "h-[56px] px-3 text-[17px]",
  xs: "h-[40px] px-3 text-[14px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "gray_50",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${
          className
        } flex items-center justify-center cursor-text ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "sm", "md", "xl", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_100_02",
    "white_A700",
    "gray_100_01",
    "gray_50",
    "blue_gray_100",
    "gray_800_23",
  ]),
};

export { Input };
