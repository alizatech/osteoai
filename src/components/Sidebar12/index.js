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
      width="288px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ ['.${sidebarClasses.container}']: { gap: 72 } }}
      className={`${
        props.className
      } flex-col h-screen gap-[72px] lg:pt-8 top-0 left-0 ml-0 bottom-0 my-auto lg:gap-72px lg:mx-0 md:gap-[54px] md:pt-5 md:mx-0 sm:gap-0 sm:pt-4 bg-white-a700 shadow-xl flex-1 sticky overflow-auto rounded-[12px] md:hidden`}
    >
      <Img
        src="images/img_medical_logo_2.png"
        alt="MedicallogoTwo"
        className="h-[64px] w-[24%] rounded-[10px] object-contain"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "14px 14px 14px 28px",
            gap: "19px",
            color: "#8C8C8C",
            fontWeight: 500,
            fontSize: "16px",
            ["&:hover, &:ps-active"]: {
              color: "#3F3F3F",
              fontWeight: "700 !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.49px" } }}
      >
        <MenuItem
          icon={
            <Img
              src="images/img_icon.svg"
              alt="Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_menu.svg"
              alt="Menu"
              className="h-[24px] w-[12px]"
            />
          }
        >
          Contact Us
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_icon_gray_400_02.svg"
              alt="Icon"
              className="h-[28px] w-[28px]"
            />
          }
        >
          Patients
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_icon_gray_400_02_20x20.svg"
              alt="Icon"
              className="h-[20px] w-[20px]"
            />
          }
        >
          About Osteo AI
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_icon_gray_400_02_24x24.svg"
              alt="Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Profile
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_icon_24x24.svg"
              alt="Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Log Out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}