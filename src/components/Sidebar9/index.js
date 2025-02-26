import { Img, Heading } from "../..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar({...props}) {
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
      className={`${props.className} flex flex-col h-screen top-0 bg-white-a700 shadow-xl sticky overflow-auto md:hidden`}
    >
      <div className="flex flex-col gap-24 self-stretch">
        <div className="flex flex-col items-start gap-14">
          <Heading
            size="headings"
            as="h5"
            className="ml-[58px] font-opensans text-[20px] font-semibold text-white-a700"
          >
            Submit
          </Heading>
        </div>
        <div className="flex items-center justify-center gap-[22px] self-stretch">
          <Img
            src="images/img_medical_logo_2.png"
            alt="MedicalLogo"
            className="h-[64px] w-[24] rounded-[8px] object-contain"
          />
          <Heading
            size="headings2xl"
            as="h2"
            className="mb-1.5 self-end text-[12px] font-semibold leading-[48px] text-deep_purple-a700"
          >
            Osteo-AI
          </Heading>
        </div>
      </div>
      <Menu
        menuStyles={{
          button: {
            padding: "14px 14px 14px 26px",
            gap: "12px",
            color: "#8C8C8C",
            fontWeight: 500,
            fontSize: "16px",
            ["&:hover, &:active"]: { color: "#3f3f3f", fontWeight: "700 !important" },
          },
        }}
        rootStyles={{ ["& ul"]: { gap: "0.49px" } }}
        className="flex flex-col"
      >
        <MenuItem icon={<Img src="images/img_icon_svg" alt="Icon" className="h-[24px] w-[24px]" />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<Img src="images/img_menu_svg" alt="Menu" className="h-[16px] w-[14px]" />}>
          Contact Us
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_icon_gray_400_02.svg" alt="Icon" className="h-[20px] w-[20px]" />}
        >
          Patients
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_icon_gray_400_02_2x20.svg" alt="Icon" className="h-[20px] w-[20px]" />}
        >
          About Osteo Aid
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_icon_gray_400_02_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}
        >
          Profile
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_icon_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}
        >
          Log Out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
