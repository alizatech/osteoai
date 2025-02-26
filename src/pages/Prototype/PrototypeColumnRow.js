import { Heading, Img, Button } from "../components";
import UserProfile from "../components/UserProfile";
import React from "react";

export default function PrototypeColumnRow() {
  return (
    <div className="mt-[72px] flex flex-col items-center self-stretch">
      <div className="flex flex-col items-center gap-9 px-14 lg:gap-[12px] md:px-5 md:px-s-[-46px]">
        <Heading
          size="text-xl"
          as="h3"
          className="text-[47.79px] font-medium text-gray-800_01 lg:text-[39px] md:w-auto md:text-[25px]"
        >
          How Getco-Aid Works
        </Heading>
        <Heading
          size="text-base"
          as="h4"
          className="text-[18.47px] font-medium text-gray-400_01 lg:text-[15px]"
        >
          Small qualified doctors are ready to serve you
        </Heading>
      </div>

      {/* Doctor Section */}
      <div className="flex justify-center items-center lg:w-full md:w-full">
        <div className="flex flex-row md:flex-col items-center gap-5 px-[12px] py-[12px] shadow-lg rounded-[12px] bg-white-A700">
          <div className="relative">
            <Img
              src="images/img_peoxis_rdima.png"
              alt="Peoxis"
              className="absolute left-0 right-0 top-[-14px] w-[122px] h-[122px] object-contain"
            />
          </div>
          <div>
            <Img
              src="images/img_rectangle_27.png"
              className="w-full rounded-[12px] object-cover"
              alt="Doctor Image"
            />
          </div>
          <Heading
            size="text-xs"
            as="h5"
            className="text-[12.28px] font-medium text-gray-800_01 lg:text-[10px]"
          >
            Dr. Robert Henry
          </Heading>
          <Heading
            size="text-base"
            as="h5"
            className="text-[17.37px] font-medium leading-[24px] text-gray-600 lg:text-[14px]"
          >
            Head of Surgery Department
          </Heading>
        </div>
      </div>

      {/* X-Ray Input Section */}
      <div className="flex justify-center items-center mt-[32px] lg:w-full md:w-full">
        <div className="flex flex-col justify-center items-center gap-5 px-[12px] py-[12px] shadow-lg rounded-[12px] bg-white-A700">
          <Heading
            size="text-base"
            as="h5"
            className="text-[17.37px] font-medium leading-[24px] text-gray-600 lg:text-[14px]"
          >
            Input Knee X-rays
          </Heading>
          <Heading
            size="text-xs"
            as="h6"
            className="text-[12.28px] font-medium text-gray-800_01 lg:text-[10px]"
          >
            Conduct X-rays to examine the condition of your knee joints.
          </Heading>
        </div>
      </div>

      {/* Accurate Diagnosis Section */}
      <div className="flex justify-center items-center mt-[32px] lg:w-full md:w-full">
        <div className="flex flex-col justify-center items-center gap-5 px-[12px] py-[12px] shadow-lg rounded-[12px] bg-white-A700">
          <Heading
            size="text-base"
            as="h5"
            className="text-[17.37px] font-medium leading-[24px] text-gray-600 lg:text-[14px]"
          >
            Accurate Diagnosis
          </Heading>
          <Heading
            size="text-xs"
            as="h6"
            className="text-[12.28px] font-medium text-gray-800_01 lg:text-[10px]"
          >
            AI-based technology analyzes patient X-rays to provide accurate diagnoses of arthritis.
          </Heading>
        </div>
      </div>

      {/* Progress Tracking Section */}
      <div className="flex justify-center items-center mt-[32px] lg:w-full md:w-full">
        <div className="flex flex-col justify-center items-center gap-5 px-[12px] py-[12px] shadow-lg rounded-[12px] bg-white-A700">
          <Heading
            size="text-base"
            as="h5"
            className="text-[17.37px] font-medium leading-[24px] text-gray-600 lg:text-[14px]"
          >
            Progress Tracking
          </Heading>
          <Heading
            size="text-xs"
            as="h6"
            className="text-[12.28px] font-medium text-gray-800_01 lg:text-[10px]"
          >
            Continuously monitor patient progress and get updated treatment plans based on follow-up assessments.
          </Heading>
        </div>
      </div>

      {/* Continued Support Section */}
      <div className="flex justify-center items-center mt-[32px] lg:w-full md:w-full">
        <div className="flex flex-col justify-center items-center gap-5 px-[12px] py-[12px] shadow-lg rounded-[12px] bg-white-A700">
          <Heading
            size="text-base"
            as="h5"
            className="text-[17.37px] font-medium leading-[24px] text-gray-600 lg:text-[14px]"
          >
            Continued Support
          </Heading>
          <Heading
            size="text-xs"
            as="h6"
            className="text-[12.28px] font-medium text-gray-800_01 lg:text-[10px]"
          >
            Getco-Aid provides ongoing support and guidance throughout patient recovery to ensure the best possible results.
          </Heading>
        </div>
      </div>
    </div>
  );
}
