import { Button, Input, Heading, Img, Text } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function Login({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1664px]"
    >
      <div className="container-xs flex w-[1664px] justify-center h-[1024px] px-5">
        <div className="flex w-[382px] items-start flex-col rounded-[28px] bg-white area0 lg:w-full md:w-full md:flex-col">
          <div className="w-[40%] self-center md:w-full md:px-5">
            <div className="mt-[26px] flex flex-col items-center gap-[78px] md:mr-0">
              <div className="h-[52px] flex flex-col gap-[18px] lg:gap-[141px] sm:gap-[94px]">
                <div className="mt-[-46px] flex items-start gap-[37px] md:mx-0 sm:w-full">
                  <img
                    src="images/img_medical_logo_2.png"
                    alt="Medicallogotwo"
                    className="mb-4 h-[64px] w-[64px] rounded-[10px] object-contain sm:w-full"
                  />
                  <Text
                    size="text3xl"
                    as="p"
                    className="self-end text-[40px] font-normal text-white-a700 lg:text-[34px] md:text-[32px]"
                  >
                    Osteo-Aid
                  </Text>
                </div>
                <img
                  src="images/img_rectangle_379.png"
                  alt="Image"
                  className="h-[580px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-[78px] flex flex-1 flex-col items-start gap-[116px] lg:gap-[87px] md:self-stretch md:px-5 sm:gap-[58px]">
            <a
              href="Login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-[198px] self-stretch lg:gap-[198px] md:gap-[73px] sm:gap-[49px]"
            >
              <Heading
                size="text2xl"
                as="h1"
                className="text-[32px] md:ml-0 text-gray-800_03"
              >
                Login
              </Heading>
            </a>
            <div className="flex flex-col items-start gap-[98px] self-stretch lg:gap-[98px] md:gap-[73px] sm:gap-[49px]">
              <div className="flex flex-col items-start self-stretch">
                <Heading
                  size="text1xl"
                  as="h2"
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
                  className="w-[76%] rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                />
              </div>
              <div>
                <Heading
                  size="text6xl"
                  as="h3"
                  className="ml-1.5 mt-[18px] text-[20px] font-medium text-gray-800_03 lg:text-[17px] md:ml-0"
                >
                  Password
                </Heading>
                <Input
                  color="gray_100_01"
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="mt-1.5 w-[76%] rounded-[14px] border border-solid border-blue_gray-100_01 px-3 font-medium"
                />
              </div>
              <Button
                className="ml-[184px] min-w-[298px] rounded-[14px] border border-solid border-deep_purple-a700 px-[33px] font-medium md:ml-0 sm:px-4"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}