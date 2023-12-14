import React from "react";

const sizeClasses = {
  txtNanumSquareacB16: "font-bold font-nanumsquareac",
  txtNanumSquareacR16: "font-nanumsquareac font-normal",
  txtNanumSquareacR14Gray700: "font-nanumsquareac font-normal",
  txtKlavikaBold16: "font-bold font-klavika",
  txtNanumSquareacR12: "font-nanumsquareac font-normal",
  txtNanumSquareacB12: "font-bold font-nanumsquareac",
  txtNanumSquareacB24: "font-bold font-nanumsquareac",
  txtNanumSquareacR14: "font-nanumsquareac font-normal",
  txtNanumSquareacB14: "font-bold font-nanumsquareac",
  txtNanumSquareacR12Bluegray900: "font-nanumsquareac font-normal",
  txtNanumSquareacR14Bluegray900: "font-nanumsquareac font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
