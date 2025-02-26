import { Img, Heading } from "../..";
import React from "react";

export default function DiagnosticReport({ reportTitle = "Diagnostic Report", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 px-3.5 py-[18px] bg-white-a700 shadow-3xl flex-1 rounded-[20px]`}
    >
      <Heading
        size="text2xl"
        as="p"
        className="ml-3 self-end text-[25px] font-medium tracking-[-0.50px] text-gray-800_03"
      >
        {reportTitle}
      </Heading>
      <Img
        src="images/img_rectangle_386.png"
        alt="Diagnostic"
        className="h-[54px] w-[14%] object-contain"
      />
    </div>
  );
}
