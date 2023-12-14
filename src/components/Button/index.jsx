import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg", square: "rounded-none" };
const variants = {
  outline: {
    blue_gray_100:
      "border border-blue_gray-100 border-solid text-blue_gray-900",
    blue_gray_900:
      "border-b-4 border-blue_gray-900 border-solid text-blue_gray-900",
  },
  fill: {
    white_A700: "bg-white-A700",
    gray_500: "bg-gray-500",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
};
const sizes = { xs: "p-2", sm: "p-4", md: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_100",
    "blue_gray_900",
    "white_A700",
    "gray_500",
  ]),
};

export { Button };
