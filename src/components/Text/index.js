import React from "react";

const sizes = {
  textxs: "text-[8px] font-normal",
  textmd: "text-[12px] font-normal",
  textlg: "text-[13px] font-normal",
  text8xl: "text-[24px] font-light lg:text-[20px] md:text-[22px]",
  text3xl: "text-[24px] font-normal lg:text-[34px] md:text-[30px] sm:text-[36px]",
  text4xl: "text-[42px] font-normal lg:text-[35px] md:text-[39px] sm:text-[32px]",
};

const Text = ({ children, className = "", as, size = "text8xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
