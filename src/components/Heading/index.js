import React from "react";

const sizes = {
  textxs: "text-[10px] font-medium",
  textxl: "text-[14px] font-medium",
  text2xl: "text-[15px] font-medium",
  text3xl: "text-[16px] font-medium lg:text-[13px]",
  text4xl: "text-[18px] font-medium lg:text-[14px]",
  text5xl: "text-[20px] font-medium lg:text-[16px]",
  text6xl: "text-[23px] font-medium md:text-[21px]",
  text7xl: "text-[27px] font-medium md:text-[23px] sm:text-[21px]",
  text8xl: "text-[32px] font-medium lg:text-[30px] md:text-[28px]",
  text9xl: "text-[38px] font-medium md:text-[34px] sm:text-[32px]",
  text10xl: "text-[47px] font-medium lg:text-[39px] md:text-[34px] sm:text-[37px]",
  headings: "text-[16px] font-semibold lg:text-[13px]",
  headingxs: "text-[20px] font-semibold lg:text-[17px]",
  headingxl: "text-[24px] font-semibold lg:text-[22px] md:text-[22px]",
  heading2xl: "text-[25px] font-bold lg:text-[22px] md:text-[23px] sm:text-[21px]",
  heading3xl: "text-[27px] font-semibold lg:text-[25px] md:text-[25px]",
  heading4xl: "text-[32px] font-semibold lg:text-[27px] md:text-[28px]",
  heading5xl: "text-[39px] font-bold lg:text-[34px] md:text-[32px]",
  heading6xl: "text-[48px] font-semibold lg:text-[40px] md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "text3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-400_04 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
