import { Img, Heading } from "../..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  // Use this function to collapse/expand the sidebar
  // function collapseSidebar() {
  //   setCollapsed(!collapsed);
  // }

  return (
    <Sidebar
      {...props}
      width="296px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${
        props.className
      } flex flex-col h-screen pt-[62px] top-0 lg:pt-8 md:pt-5 sm:pt-4 bg-white-a700 shadow-xl sticky overflow-auto md:hidden`}
    >
      <div className="flex flex-col gap-[102px] self-stretch">
        <div className="flex items-start justify-center gap-3.5">
          <Img
            src="images/img_medical_logo_2.png"
            alt="MedicalLogo"
            className="h-[64px] w-[42.5px] self-center rounded-[10px] object-contain"
          />
          <Heading size="heading2xl" as="h2" className="text-[32px] font-semibold leading-[48px] text-deep_purple-a700">
            Osteo-Aid
          </Heading>
        </div>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "14px 14px 14px 28px",
            color: "#8c8c8c",
            fontWeight: 500,
            fontSize: "16px",
          },
          hover: { "&.ps-active": { color: "#3f3f3f", fontWeight: "700 !important" } },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.49px" } }}
        className="flex flex-col"
      >
        <MenuItem icon={<Img src="images/img_icon.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<Img src="images/img_menu.svg" alt="Menu" className="h-[20px] w-[12px]" />}>
          Contact Us
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_gray_400_02.svg" alt="Icon" className="h-[28px] w-[28px]" />}>
          Patients
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_gray_400_02_20x20.svg" alt="Icon" className="h-[20px] w-[20px]" />}>
          About Osteo Aid
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_gray_400_02_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
          Profile
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
          Log out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}