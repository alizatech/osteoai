import { Helmet } from "react-helmet";
import { Button, Text, Heading, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import React from "react";

export default function NewPatientFormPage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full bg-indigo-200 py-[34px] sm:py-4">
        <div className="container-xs flex items-start justify-center gap-9 lg:px-5 md:px-5">
          <Sidebar />
          <div className="flex-1 flex-col gap-7">
            <div className="flex h-[226px] items-start gap-[88px] rounded-[24px] bg-[url(/public/images/img_frame_19.png)] bg-cover bg-no-repeat px-[22px] py-[38px] lg:h-auto sm:flex-col sm:p-4">
              <img
                src="images/img_ellipse_4.png"
                alt="Image"
                className="mb-1.5 h-[144px] w-[144px] object-contain sm:mb-0 sm:w-full"
              />
              <Heading
                size="headingxl"
                className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white lg:text-[30px] sm:text-[28px]"
              >
                Enhancing Joint <br /> Health
              </Heading>
            </div>

            <div className="flex justify-center px-14 md:px-5 sm:px-4">
              <div className="flex w-[78%] flex-col items-center lg:w-full md:w-full">
                <Text className="text-[25px] font-bold tracking-[0.5px] text-gray-800 lg:text-[24px]">
                  Create New Patient Profile
                </Text>

                <div className="mt-8 flex w-[94%] justify-center self-start rounded-[20px] bg-white p-[18px] shadow-sm lg:w-full md:w-full">
                  <div className="mb-[42px] flex w-[90%] flex-col items-start lg:w-full md:w-full">
                    <Heading
                      size="textxl1"
                      as="h3"
                      className="ml-1 font-karla text-[32px] font-medium text-black-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                    >
                      Full Name
                    </Heading>
                    <Input
                      color="blue_gray_100"
                      size="sm"
                      variant="outline"
                      name="fullName"
                      className="mt-1.5 self-stretch rounded-lg border px-2.5 md:mr-0"
                    />

                    <div className="mt-10 flex flex-col items-start gap-[18px] self-stretch">
                      <Heading
                        size="textxl1"
                        as="h4"
                        className="font-karla text-[32px] font-normal text-black-900 lg:text-[27px] md:text-[26px] sm:text-[24px]"
                      >
                        Age
                      </Heading>
                      <Input
                        color="blue_gray_100"
                        size="sm"
                        variant="outline"
                        name="editText"
                        className="mt-1 self-stretch rounded-lg border px-2.5 md:ml-0"
                      />
                    </div>

                    <Heading
                      size="textxl1"
                      as="h4"
                      className="mt-1 font-karla text-[32px] font-normal text-black-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                    >
                      Gender
                    </Heading>
                    <div className="mx-1 mt-1.5 flex items-center gap-2.5 self-stretch md:mx-0">
                      <div className="flex w-[2%] flex-col gap-2 self-end md:flex-row">
                        <div className="h-[16px] w-[16px] rounded-lg border-[0.7px] border-solid border-gray-900" />
                        <div className="h-[16px] w-[16px] rounded-lg border-[0.7px] border-solid border-gray-900" />
                      </div>
                      <div className="flex flex-1 flex-col items-start">
                        <Text
                          as="p"
                          className="font-karla text-[24px] font-normal text-black-900 lg:text-[20px]"
                        >
                          Male
                        </Text>
                        <Text
                          as="p"
                          className="font-karla text-[24px] font-normal text-black-900 lg:text-[20px]"
                        >
                          Female
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-[106px] mt-[66px] flex justify-between gap-5 self-stretch md:mx-0">
                  <Button
                    shape="round"
                    className="min-w-[238px] rounded-[10px] px-[34px] font-opensans font-semibold sm:px-4"
                  >
                    Create Profile
                  </Button>
                  <Button
                    color="blue_gray_100_04"
                    shape="round"
                    className="mr-28 min-w-[238px] rounded-[10px] px-[34px] font-opensans font-semibold sm:px-4"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}