import { Text, Img } from "../../components";
import React from "react";

export default function PrototypeStackosteoaid() {
  return (
    <div className="relative h-[792px] content-center self-stretch lg:h-auto md:h-auto">
      <Img src="_images/img_rectangle_40.png" alt="Image" className="ml-auto h-[792px] w-[94%] object-contain" />
      <Text
        size="text14xl"
        as="p"
        className="absolute left-[19%] top-[28%] m-auto text-[42.27px] font-normal text-gray-800_03 lg:text-[35px] md:text-[26px]"
      >
        <span className="text-gray-800_03">Osteo&nbsp;</span>
        <span className="text-indigo-600">AID</span>
      </Text>
    </div>
  );
}