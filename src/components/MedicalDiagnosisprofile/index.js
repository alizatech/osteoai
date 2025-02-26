import { Heading, Img } from "../..";
import React from "react";

export default function MedicalDiagnosisProfile({
  diagnosisImage = "images/img_rectangle_375.png",
  diagnosisDescription = (
    <>
      <strong>Diagnosis of</strong> knee osteoarthritis <br />
      with accurate stage through medical imaging
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${
        props.className
      } flex flex-col items-center w-[24%] md:w-full gap-3 py-4 bg-white-a700 shadow-xs rounded-[28px]`}
    >
      <Img src={diagnosisImage} alt="Image" className="h-[70px] w-[44%] object-contain" />
      <Heading
        size="text5xl"
        as="p"
        className="mb-[22px] w-[94%] self-end text-[18.47px] font-medium leading-[27px] text-gray-800_03"
      >
        {diagnosisDescription}
      </Heading>
    </div>
  );
}