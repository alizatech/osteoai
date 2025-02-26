import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import DiagnosticReport from "../../components/DiagnosticReport";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import React from "react";

export default function ViewReportsPage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-indigo-200-49 py-[34px] sm:py-4">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex gap-8">
            <Sidebar />
            <div className="flex-1">
              <Header className="md:flex-col" />
              <div
                className="mr-7 md:mr-0 flex items-start gap-[88px] rounded-[24px] bg-[url(/public/images/img_frame_19.png)] bg-cover bg-no-repeat px-[22px] py-[38px] lg:h-auto md:h-auto sm:flex-col sm:p-4"
              >
                <Img
                  src="images/img_ellipse_4.png"
                  alt="Image"
                  className="mb-1.5 h-[144px] w-[143] object-contain sm:mb-0 sm:w-full"
                />
                <Heading
                  size="heading3xl"
                  className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white-a700 lg:text-[30px] md:text-[30px] sm:w-full sm:text-[28px]"
                >
                  Enhancing Joint
                  <br /> Health
                </Heading>
              </div>
              <Heading className="mt-7 flex flex-col items-start gap-[5px] self-stretch rounded-[20px] bg-gray-200 py-[59px] pl-[344px] pr-14 shadow-xl lg:pl-8 md:pr-5 sm:p-4">
                View Reports
              </Heading>
              <div className="mt-[38px] mr-36 flex w-[60%] flex-col gap-[60px] md:mx-0 md:w-full">
                <DiagnosticReport reportTitle="Treatment Plan" />
              </div>
              <a href="https://www.youtube.com/embed/bv8Fvkks27I" target="_blank">
                <div className="relative mb-2.5 h-[90px] w-[66%] px-[18px] sm:px-4">
                  <Img
                    src="images/img_rectangle_383.png"
                    alt="Image"
                    className="absolute bottom-0 left-[6%] top-0 my-auto h-[72px] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-[88%] items-center justify-between gap-5">
                    <Heading
                      size="text9xl"
                      className="self-end text-[25px] font-medium tracking-[-0.5px] text-gray-800_03 lg:text-[21px]"
                    >
                      Progress Tracking
                    </Heading>
                    <Img
                      src="images/img_rectangle_387.png"
                      alt="Image"
                      className="mr-[116px] h-[54px] w-[8%] object-contain"
                    />
                  </div>
                </div>
              </a>
              <Button
                className="mt-[46px] min-w-[238px] rounded-[10px] px-[34px] font-opensans font-semibold sm:px-4"
                shape="rounded"
                variant="outline_gray_109_04"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}