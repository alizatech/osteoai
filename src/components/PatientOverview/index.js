import { Heading, Img } from "../..";
import React from "react";

export default function PatientOverview({
  checkmarkImage = "images/img_checkmark.svg",
  viewAllText = "View All Patients",
  zipcodeText = "1050",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${
        props.className
      } flex items-center w-[50%] md:w-full p-1 bg-white_a700 shadow-sm rounded-[20px]`}
    >
      <div className="flex w-full flex-col items-center self-end">
        <div className="relative z-[1] flex items-center justify-center gap-[22px] self-stretch">
          <Img src={checkmarkImage} alt="View All" className="h-[38px] self-end" />
          <Heading
            size="text9xl"
            as="p"
            className="text-[25px] font-medium tracking-[-0.50px] text-gray-800_03"
          >
            {viewAllText}
          </Heading>
        </div>
        <Heading
          size="headinglg"
          as="h4"
          className="relative mt-[-2px] text-[25px] font-bold tracking-[-0.50px] text-indigo-600"
        >
          {zipcodeText}
        </Heading>
      </div>
    </div>
  );
}