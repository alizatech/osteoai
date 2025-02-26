import { Helmet } from "react-helmet";
import { Heading, Img, Button, Input } from "../components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import React from "react";

export default function PatientNewProfilePage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-indigo-200_49 py-[34px] sm:py-4">
        <div className="container-xl lg:px-5 md:px-5 sm:px-4">
          <div className="flex items-start gap-6">
            <Sidebar />
            <div className="flex flex-1 flex-col gap-7">
              <Header className="mx-1.5 md:mx-8 md:flex-col" />
              <div className="flex h-[226px] items-start gap-[66px] rounded-[24px] bg-[url('/public/images/img_frame_19.png')] bg-cover bg-no-repeat px-[22px] py-[38px] lg:h-auto md:h-auto sm:flex-col sm:p-8">
                <img
                  src="/images/img_ellipse_4.png"
                  alt="Profile"
                  className="mb-1.5 h-[140px] w-[140px] object-contain sm:mb-0 sm:w-full"
                />
                <Heading
                  size="heading3xl"
                  className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white-a700 lg:text-[30px] md:text-[30px] sm:w-full sm:text-[28px]"
                >
                  Enhancing Joint
                  <br />
                  Health
                </Heading>
              </div>

              {/* Patient Profile Section */}
              <div className="flex flex-col gap-7">
                <Heading
                  size="heading2xl"
                  className="font-bold text-black-900 lg:text-[24px]"
                >
                  Patient Profile
                </Heading>
                <div className="flex items-center gap-6 bg-white-a700 rounded-[24px] shadow-xl p-4">
                  <img
                    src="/images/img_ellipse_118.png"
                    alt="Patient"
                    className="h-[140px] w-[140px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <Heading
                      size="heading3xl"
                      className="font-bold text-black-900 lg:text-[20px]"
                    >
                      Aliza Shah
                    </Heading>
                  </div>
                </div>
              </div>

              {/* General Information */}
              <div className="flex flex-col gap-7">
                <Heading
                  size="heading2xl"
                  className="font-bold text-black-900 lg:text-[24px]"
                >
                  General Information
                </Heading>
                <div className="flex items-start gap-6">
                  <div className="rounded-[14px] bg-gray-200 px-4 py-2">
                    <Button className="font-bold text-black">Edit Profile</Button>
                  </div>
                </div>
              </div>

              {/* Options Section */}
              <div className="flex flex-col gap-9">
                <Heading className="font-bold text-gray-800">Options</Heading>
                <div className="flex flex-wrap gap-6">
                  {/* Diagnose */}
                  <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-[20px] p-6">
                    <img src="/images/img_image_3.png" alt="Diagnose" />
                    <Heading className="font-medium text-gray-800">Diagnose</Heading>
                  </div>

                  {/* Track Progress */}
                  <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-[20px] p-6">
                    <img src="/images/img_vector.svg" alt="Track Progress" />
                    <Heading className="font-medium text-gray-800">Track Progress</Heading>
                  </div>

                  {/* View Report */}
                  <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-[20px] p-6">
                    <img src="/images/img_vector.svg" alt="Report" />
                    <Heading className="font-medium text-gray-800">View Report</Heading>
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