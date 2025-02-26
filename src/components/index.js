import Heading from "../../components/Heading";
import Img from "../../components/Img";
import React from "react";

export default function UserProfile1({
  userName = "Muhammad Talha",
  interactionCount = "27 times",
  ...props
}) {
  return (
    <div
      {...props}
      className={'${props.className} flex justify-center items-center gap-6 p-1 bg-white-a700 shadow-md flex-1 rounded-[20px]'}
    >
      <Img src="images/img_ellipse_110.png" alt="Muhammad Talha" className="h-[30px] rounded-[14px] object-cover" />
      <div className="flex flex-1 flex-wrap justify-between gap-5 self-end">
        <Heading size="texts" as="p" className="text-[10.86px] font-medium tracking-[-0.22px] text-deep_purple-a700">
          {userName}
        </Heading>
        <Heading size="texts" as="p" className="text-[10.86px] font-medium tracking-[-0.22px] text-deep_purple-a700">
          {interactionCount}
        </Heading>
      </div>
    </div>
  );
}