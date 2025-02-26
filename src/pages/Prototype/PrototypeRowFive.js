import React from "react";
import { Heading, Text, Img } from "../components";

export default function PrototypeRowFive() {
  return (
    <div className="flex justify-center self-stretch">
      <div className="container mx-5 flex justify-center px-4 lg:px-5 md:px-5">
        <div className="flex flex-col items-start lg:w-full md:w-full">
          {/* Main Heading */}
          <Heading
            size="txtHeading"
            className="text-[21px] font-medium leading-[24.77px] text-gray-800_03 lg:text-[20px] md:mt-0 md:text-[18px] md:text-[22px]"
          >
            Osteoarthritis Awareness
          </Heading>

          <div className="flex flex-row justify-center self-stretch md:flex-col">
            <div className="flex flex-col items-center self-stretch w-full">
              {/* First Card */}
              <div className="flex flex-col bg-white rounded-[12px] px-7 py-7 shadow-5xl lg:w-full sm:w-[60%]">
                <Img
                  src="images/img_knees_analysis_465770.png"
                  alt="Osteoarthritis"
                  className="h-[150px] w-full rounded-[8px] object-cover"
                />
                <Text
                  className="mt-[12px] text-[15.2px] font-medium leading-[16px] text-gray-800_03"
                  size="txtTextLarge"
                >
                  Osteoarthritis Causes and Symptoms
                </Text>
                <Text
                  className="text-[13.12px] font-normal leading-[14px] text-gray-800_05 mt-3"
                  size="txtTextNormal"
                >
                  Overview of osteoarthritis, including common causes, symptoms to watch for, and how it affects daily life.
                </Text>
                <a
                  href="#"
                  className="relative mt-4 text-[15.74px] tracking-[0.8px] text-deep_purple-a700 underline"
                >
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col lg:px-7 md:px-5 py-7 shadow-5xl rounded-[12px] bg-white mt-[20px]">
            <Img
              src="images/img_diagnosis_1026x280.png"
              alt="Diagnosis Techniques"
              className="h-[150px] w-full rounded-[8px] object-cover"
            />
            <Text
              className="mt-[12px] text-[15.2px] font-medium leading-[16px] text-gray-800_03"
              size="txtTextLarge"
            >
              The Importance of Early Diagnosis
            </Text>
            <Text
              className="text-[13.12px] font-normal leading-[14px] text-gray-800_05 mt-3"
              size="txtTextNormal"
            >
              Discusses the benefits of early diagnosis, how it can lead to more effective treatment options, and improve patient outcomes.
            </Text>
            <a
              href="#"
              className="relative mt-4 text-[15.74px] tracking-[0.8px] text-deep_purple-a700 underline"
            >
              See More
            </a>
          </div>

          {/* Third Card */}
          <div className="flex flex-col lg:px-7 md:px-5 py-7 shadow-5xl rounded-[12px] bg-white mt-[20px]">
            <Img
              src="images/img_ai_technique_1026x280.png"
              alt="AI Imaging"
              className="h-[150px] w-full rounded-[8px] object-cover"
            />
            <Text
              className="mt-[12px] text-[15.2px] font-medium leading-[16px] text-gray-800_03"
              size="txtTextLarge"
            >
              Advancing Imaging Techniques in Osteoarthritis
            </Text>
            <Text
              className="text-[13.12px] font-normal leading-[14px] text-gray-800_05 mt-3"
              size="txtTextNormal"
            >
              Explores how advanced imaging and AI technology are transforming the way osteoarthritis is diagnosed and treated.
            </Text>
            <a
              href="#"
              className="relative mt-4 text-[15.74px] tracking-[0.8px] text-deep_purple-a700 underline"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
