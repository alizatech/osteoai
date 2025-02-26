import React from "react";
import { Helmet } from "react-helmet";
import {Heading, Button, Text, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar8 from "../../components/Sidebar8";

export default function DiagnosisReportPage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-indigo-200_49 py-[34px] sm:py-4">
        <div className="container-xs mb-[34px] lg:px-5 md:px-5">
          <div className="flex items-start gap-8">
            <Sidebar8 />
            <div className="flex flex-1 flex-col gap-6">
              <Header className="md:flex-col" />
              <div className="mr-7 md:mr-0">
                <div className="flex h-[228px] items-start gap-[88px] rounded-[24px] bg-[url('/images/img_frame_19.png')] bg-cover bg-no-repeat px-[22px] py-[38px] lg:h-auto md:h-auto sm:flex-col sm:p-4">
                  <Img
                    src="images/img_ellipse_4.png"
                    alt="Patient Image"
                    className="mb-1.5 h-[144px] w-[14%] object-contain sm:mb-0 sm:w-full"
                  />
                  <Heading
                    size="heading3x1"
                    as="h1"
                    className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white-a700 lg:text-[30px] md:text-[30px] sm:w-full sm:text-[28px]"
                  >
                    Enhancing Joint<br />
                    Health
                  </Heading>
                </div>
              </div>
              <div className="ml-[190px] mr-[230px] md:mx-0">
                <div className="flex flex-col items-center">
                  <Heading
                    size="heading3x1"
                    as="h2"
                    className="text-[36px] font-bold tracking-[-0.72px] text-gray-800_02 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                  >
                    Diagnosis Report
                  </Heading>
                  <div className="relative mt-[18px] h-[854px] self-stretch">
                    <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-5 flex-1 rounded-[5px] bg-white-a700 lg:mr-0 md:mr-8">
                      <div className="mb-[60px] flex flex-col items-center">
                        <div className="flex items-start gap-[30px] self-stretch rounded-[10px] bg-indigo-600_51 px-[22px] py-1 md:flex-col sm:px-4">
                          <Heading
                            size="heading3x1"
                            as="h3"
                            className="mb-3 w-[70%] text-[32px] font-medium leading-7 tracking-[-0.64px] text-white-a700 lg:w-[70%] lg:text-[27px] md:mb-0 md:w-full md:text-[26px] sm:text-[24px]"
                          >
                            Patient's Osteoarthritis Diagnosis Summary Report
                          </Heading>
                          <Img
                            src="images/img_medical_logo_2.png"
                            alt="Medical Logo"
                            className="mt-3 h-[64px] w-[8%] rounded-[10px] object-contain md:mt-0 md:w-full"
                          />
                        </div>
                        <Heading
                          size="headingmd"
                          as="h4"
                          className="ml-4 mt-5 self-start text-[24px] font-bold tracking-[-0.48px] text-gray-800_02 lg:text-[20px] md:ml-0"
                        >
                          Patient Demographics
                        </Heading>
                        <div className="mt-1.5 self-stretch bg-blue_gray-100_03 px-[22px] sm:px-4">
                          <div className="flex items-center md:flex-col">
                            <div className="flex w-[42%] items-center justify-center md:w-full">
                              <div className="flex flex-col items-start gap-[18px]">
                                <Heading
                                  size="headingmd"
                                  as="h5"
                                  className="text-[24px] font-semibold tracking-[-0.48px] text-gray-800_02 lg:text-[20px]"
                                >
                                  Name
                                </Heading>
                                <Heading
                                  size="headingmd"
                                  as="h6"
                                  className="text-[24px] font-semibold tracking-[-0.48px] text-gray-800_02 lg:text-[20px]"
                                >
                                  Patient ID
                                </Heading>
                              </div>
                              <Img
                                src="images/img_line_5.svg"
                                alt="Separator"
                                className="ml-5 h-[128px] w-[3%] object-contain"
                              />
                              <div className="ml-7 flex flex-1 flex-col items-start gap-[18px]">
                                <Text
                                  as="p"
                                  className="text-[24px] font-light tracking-[-0.48px] text-black-900 lg:text-[20px]"
                                >
                                  Aliza Rafique
                                </Text>
                                <Text
                                  as="p"
                                  className="text-[24px] font-light tracking-[-0.48px] text-black-900 lg:text-[20px]"
                                >
                                  5478
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 mt-10 flex items-start justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                          <Text
                            as="p"
                            className="text-[24px] font-normal text-black-900 lg:text-[20px]"
                          >
                            Diagnosis
                          </Text>
                          <Heading
                            size="text6x1"
                            as="p"
                            className="w-[80%] self-center text-[20px] font-light leading-[30px] text-black-900 lg:w-[80%] lg:text-[17px] md:w-full"
                          >
                            Based on the X-ray, the patient has been diagnosed
                            with osteoarthritis. The diagnosis is made on:
                            <br />
                            Joint Space Width (JSW): [Measurement in mm]
                            <br />
                            Osteophyte Formation: Observed at specific locations.
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5 self-stretch lg:flex-col">
                    <Button
                      shape="round"
                      className="min-w-[238px] rounded-[10px] px-[34px] font-semibold sm:px-4"
                    >
                      Save Report
                    </Button>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk@sz71"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        shape="round"
                        className="min-w-[238px] rounded-[10px] px-[34px] font-semibold sm:px-4"
                      >
                        Watch Video
                      </Button>
                    </a>
                    <Button
                      color="blue_gray_100_04"
                      shape="round"
                      className="min-w-[238px] rounded-[10px] px-[34px] font-semibold sm:px-4"
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
