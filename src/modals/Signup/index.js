import React from "react";
import { Heading, Button, Input, Img, Text } from "../../components";
import ModalProvider from "react-modal";

export default function Signup({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1664px]"
    >
      <div className="container-xs flex min-w-[1664px] justify-center px-14 lg:px-5 md:px-5">
        <div className="flex w-[88%] items-start justify-center gap-6 rounded-[38px] bg-white-a700 lg:w-full md:w-full md:flex-col">
          {/* Left Section */}
          <div className="w-[40%] self-center md:w-full md:px-5">
            <div className="flex flex-col gap-[212px] rounded-bl-[36px] rounded-tl-[36px] bg-indigo-600 lg:gap-[159px] md:gap-[159px] sm:gap-[106px]">
              <div className="mx-[78px] mt-12 flex items-center gap-5 md:mx-0 sm:flex-col">
                <Img
                  src="images/img_medical_logo_2.png"
                  alt="Medical Logo"
                  className="h-[64px] w-[18%] rounded-[10px] object-contain sm:w-full"
                />
                <Text
                  size="text13x1"
                  as="p"
                  className="self-end text-[40px] font-normal text-white-a700 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  Osteo-Aid
                </Text>
              </div>
              <div className="relative h-[524px]">
                <div className="absolute bottom-0 left-0 right-0 mx-auto h-[314px] rounded-bl-[34px] rounded-tl-[30px] bg-gradient"></div>
                <Img
                  src="images/img_rectangle_379.png"
                  alt="Image"
                  className="absolute inset-0 m-auto h-[524px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-[52px] flex flex-1 flex-col items-center gap-[92px] px-6 lg:gap-[92px] md:gap-[69px] md:self-stretch md:px-5">
            {/* Sign-up Heading */}
            <div className="flex flex-col items-start gap-[22px] self-stretch">
              <Heading
                size="text12x1"
                className="text-[38.67px] font-medium text-gray-800_03 lg:text-[32px] md:text-[32px] sm:text-[38px]"
              >
                Sign up For Account
              </Heading>
              {/* Input Fields */}
              <div className="flex gap-[22px] self-stretch sm:flex-col">
                {/* First Name */}
                <div className="flex w-[36%] flex-col items-start sm:w-full">
                  <Heading
                    size="text6x1"
                    as="h2"
                    className="ml-2 text-[20px] font-medium text-gray-800_03 lg:text-[17px] md:ml-0"
                  >
                    First Name
                  </Heading>
                  <Input
                    color="gray_100_01"
                    size="lg"
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    className="self-stretch rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-1 flex-col items-start px-[22px] sm:self-stretch sm:px-4">
                  <Heading
                    size="text6x1"
                    as="h3"
                    className="ml-3.5 text-[20px] font-medium text-gray-800_03 lg:text-[17px] md:ml-0"
                  >
                    Last Name
                  </Heading>
                  <Input
                    color="gray_100_01"
                    size="lg"
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    className="w-full rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col items-start self-stretch">
                <Heading
                  size="text6x1"
                  as="h4"
                  className="ml-1.5 text-[20px] font-medium text-gray-800_03 lg:text-[17px] md:ml-0"
                >
                  Email Address
                </Heading>
                <Input
                  color="gray_100_01"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="w-full rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                />
              </div>
              {/* Password Fields */}
              <div className="flex flex-col self-stretch">
                <div className="flex flex-wrap justify-between gap-5">
                  <Heading
                    size="text6x1"
                    as="h5"
                    className="text-[20px] font-medium text-gray-800_03 lg:text-[17px]"
                  >
                    Password
                  </Heading>
                  <Heading
                    size="text6x1"
                    as="h6"
                    className="text-[20px] font-medium text-gray-800_03 lg:text-[17px]"
                  >
                    Confirm Password
                  </Heading>
                </div>
                <div className="flex items-start gap-[58px] sm:flex-col">
                  <Input
                    color="gray_100_01"
                    size="lg"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="mb-1.5 w-full rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                  />
                  <Input
                    color="gray_100_01"
                    size="lg"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    className="w-full rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                  />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col items-center gap-4">
              <Button className="min-w-[298px] rounded-[14px] border border-solid border-indigo-200 px-[33px] font-medium sm:px-4">
                Sign Up
              </Button>
              <Heading
                size="text6x1"
                as="p"
                className="text-[20px] font-medium text-indigo-600 lg:text-[17px]"
              >
                Log in?
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
