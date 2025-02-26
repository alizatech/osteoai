import { CloseSVG } from "../Input/close";
import { Img, Input, Heading } from "..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex justify-between items-start gap-5`}>
      <Heading
        size="headinglg"
        as="h4"
        className="self-end text-[25px] font-bold tracking-[-0.50px] text-gray-800 md:text-[23px] sm:text-[21px]"
      >
        <span className="text-gray-800_02">Welcome,&nbsp;</span>
        <span className="text-deep_purple-a700">Dr. Hania&nbsp;</span>
      </Heading>
      <div className="mb-2 flex w-[34%] items-center justify-center gap-5 rounded-[30px] bg-white-a700 p-2 shadow-2xl md:w-full sm:flex-col">
        <Input
          shape="round"
          name="search"
          placeholder="Search"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={
            <img src="images/img_rewind.svg" alt="Rewind" className="my-1 h-[10px] w-[10px] object-contain" />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={10} width={10} fillColor="#2b3674ff" />
            ) : null
          }
          className="flex-grow gap-2.5 rounded-[20px] text-blue_gray-300"
        />
        <div className="flex items-center">
          <a href="#">
            <img src="images/img_notifications_none.svg" alt="notifications" className="h-[24px]" />
          </a>
          <a href="#">
            <img src="images/img_moon_solid_1.svg" alt="Moonsolidone" className="ml-5 h-[18px]" />
          </a>
          <a href="#">
            <img src="images/img_info_outline.svg" alt="Infooutline" className="ml-5 h-[24px]" />
          </a>
          <a href="#">
            <img src="images/img_group_157.png" alt="Image" className="ml-2.5 h-[42px] object-cover" />
          </a>
        </div>
      </div>
    </header>
  );
}
