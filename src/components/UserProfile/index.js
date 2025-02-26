import { Heading, Img } from "../..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_rectangle_30.png",
  titleText = "Personalized Treatment Plan",
  descriptionText = "Get a tailored treatment plan that may include non-surgical therapies or surgical options for each",
  ...props
}) {
  return (
    <div
      {...props}
      className={'${props.className} flex flex-col items-center w-[58%] md:w-full py-12 md:py-5 sm:py-4 bg-white-a700 shadow-lg rounded-[12px]'}
    >
      <Img src={userImage} alt="Image" className="ml-14 mr-[58px] h-[198px] w-full rounded-[20px] object-cover" />
      <Heading size="text7xl" as="p" className="mt-[38px] text-[23.28px] font-medium text-gray-800_03">
        {titleText}
      </Heading>
      <Heading
        size="text4xl"
        as="p"
        className="mb-9 mt-2.5 self-stretch text-center text-[17.37px] font-medium leading-[26px] text-gray-600"
      >
        {descriptionText}
      </Heading>
    </div>
  );
}