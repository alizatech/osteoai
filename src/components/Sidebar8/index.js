import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Img, Heading } from "..";

export default function Sidebar8(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      {...props}
      width="296px !important"
      collapsedWidth="88px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-24 top-0 lg:pt-8 md:pt-5 sm:pt-4 bg-white-a700 shadow-xl sticky overflow-auto md:hidden`}
    >
      <div className="flex flex-col gap-12 self-stretch">
        <div className="flex items-start justify-center gap-3.5">
          <Img
            src="images/img_medical_logo_2.png"
            alt="Medical Logo"
            className="h-[64px] w-[24%] rounded-[10px] object-contain"
          />
          <Heading
            size="heading2x1"
            as="h2"
            className="mt-2 self-end text-[32px] font-semibold leading-[48px] text-deep_purple-a700"
          >
            Osteo-AI
          </Heading>
        </div>

        <Menu
          menuItemStyles={{
            button: {
              padding: "14px 14px 14px 28px",
              gap: "22px",
              color: "#8C8C8C",
              fontWeight: 500,
              fontSize: "16px",
              ["&:hover, &:ps-active"]: {
                color: "#3F3F3F",
                fontWeight: "700 !important",
              },
            },
          }}
          rootStyles={{ ["& > ul"]: { gap: "0.49px" } }}
          className="flex flex-col"
        >
          <MenuItem icon={<Img src="images/img_icon.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<Img src="images/img_menu_gray_404_02.svg" alt="Menu" className="h-[24px] w-[12px]" />}>
            Contact Us
          </MenuItem>
          <MenuItem icon={<Img src="images/img_icon_gray_400_02_2x20.svg" alt="Icon" className="h-[20px] w-[20px]" />}>
            Patients
          </MenuItem>
          <MenuItem icon={<Img src="images/img_icon_gray_400_02.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            About Osteo Aid
          </MenuItem>
          <MenuItem icon={<Img src="images/img_icon_gray_400_02.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            Profile
          </MenuItem>
          <MenuItem icon={<Img src="images/img_icon_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}
