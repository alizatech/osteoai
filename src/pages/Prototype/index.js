import { Helmet } from "react-helmet";
import React, { Suspense } from "react";
import { Img, Heading, Button, Input } from "../../components";
import MedicalDiagnosisProfile from "../../components/MedicalDiagnosisprofile";
import PrototypeColumnTwo from "./PrototypeColumnTwo";
import PrototypeRowFive from "../PrototypeRowFive";
import PrototypeStackosteoaid from "./PrototypeStackosteoaid";

const data = [
  {
    diagnosisImage: "images/img_rectangle_375.png",
    diagnosisDescription: (
      <>
        Diagnosis of knee osteoarthritis <br />
        with accurate stage through medical imaging
      </>
    ),
  },
  {
    diagnosisImage: "images/img_rectangle_376.png",
    diagnosisDescription:
      "Comprehensive osteoarthritis treatment plans, both non-surgical therapies and advanced surgical options",
  },
  {
    diagnosisImage: "images/img_rectangle_378.png",
    diagnosisDescription: (
      <>
        Securely managing patient <br />
        demographics, treatment <br />
        plans, progress reports, <br />
        ensuring easy access for <br />
        personalized care.
      </>
    ),
  },
];

export default function PrototypePage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="flex w-full flex-col items-center gap-[38px] bg-white-a700">
        {/* Header Section */}
        <div className="container-xs mt-[104px] flex flex-col items-center px-14 lg:px-5 md:px-5">
          <header className="flex w-[96%] items-start justify-between gap-5 lg:w-full md:w-full md:flex-col">
            <div className="flex items-start gap-[22px] self-center">
              <Img
                src="images/img_medical_logo_2.png"
                alt="Medical Logo"
                className="h-[64px] w-[30%] self-center rounded-[10px] object-contain"
              />
              <Heading
                size="headingx1"
                as="h4"
                className="mt-2 text-[27.8px] font-semibold text-indigo-600 lg:text-[22px] md:text-[21px]"
              >
                Osteo-Aid
              </Heading>
            </div>

            {/* Navigation */}
            <div className="mr-40 flex w-[72%] items-center justify-between gap-5 md:mr-0 md:w-full md:flex-col">
              <ul className="flex flex-wrap gap-11">
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Heading
                      size="text5x1"
                      as="p"
                      className="text-[18.47px] font-medium text-indigo-600"
                    >
                      Home
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer lg:text-[15px]">
                    <Heading
                      size="text5x1"
                      as="p"
                      className="text-[18.47px] font-medium text-gray-800_03 hover:text-indigo-600"
                    >
                      Guide
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer lg:text-[15px]">
                    <Heading
                      size="text5x1"
                      as="p"
                      className="text-[18.47px] font-medium text-gray-800_03 hover:text-indigo-600"
                    >
                      Articles
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer lg:text-[15px]">
                    <Heading
                      size="text5x1"
                      as="p"
                      className="text-[18.47px] font-medium text-gray-800_03 hover:text-indigo-600"
                    >
                      About Us
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer lg:text-[15px]">
                    <Heading
                      size="text5x1"
                      as="p"
                      className="text-[18.47px] font-medium text-gray-800_03 hover:text-indigo-600"
                    >
                      Contact Us
                    </Heading>
                  </a>
                </li>
              </ul>

              {/* Login and Signup Buttons */}
              <div className="flex w-[36%] justify-between gap-5 md:w-full">
                <a href="https://www.youtube.com/embed/example" target="_blank" rel="noreferrer">
                  <Button
                    size="lg"
                    shape="round"
                    className="min-w-[158px] rounded-[10px] px-[34px] font-medium sm:px-4"
                  >
                    Login
                  </Button>
                </a>
                <a href="https://www.youtube.com/embed/example" target="_blank" rel="noreferrer">
                  <Button
                    color="deep_purple_A700"
                    size="lg"
                    variant="outline"
                    shape="round"
                    className="min-w-[158px] rounded-[12px] !border-[1.74px] px-[32.26px] font-medium sm:px-4"
                  >
                    Sign up
                  </Button>
                </a>
              </div>
            </div>
          </header>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center self-stretch">
          {/* Hero Section */}
          <div className="flex items-start gap-[34px] self-stretch md:flex-col">
            <Img
              src="images/img_img_1.png"
              alt="Hero"
              className="mt-[202px] h-[620px] w-[64%] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col gap-[180px] self-center lg:gap-[135px] md:gap-[135px] md:self-stretch sm:gap-[90px]">
              <Heading
                size="heading4x1"
                as="h1"
                className="w-[88%] text-[48.45px] font-semibold leading-[52px] text-indigo-600 lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-center"
              >
                Revolutionizing Osteoarthritis Care with Precision Diagnostics and Tailored Treatment Solutions
              </Heading>
            </div>
          </div>

          {/* Components */}
          <PrototypeColumnTwo />
          <PrototypeRowFive />

          {/* Footer Section */}
          <div className="container-xs mt-[124px] flex flex-col items-center px-14 lg:px-5 md:px-5">
            <Heading
              size="text15x1"
              as="h2"
              className="text-[47.77px] font-medium text-gray-800 lg:text-[39px] md:text-[31px] sm:text-[25px]"
            >
              Subscribe To Our Newsletter
            </Heading>
            <div className="flex w-[92%] flex-col items-start gap-2.5 rounded-[14px] bg-gray-100 py-[38px] px-[76px] pr-14 lg:w-full lg:px-8 md:w-full md:px-5 sm:px-4">
              <Input
                color="gray_100_02"
                size="lg"
                type="email"
                name="email"
                placeholder="Enter your email here"
                className="flex-grow rounded-[14px] border border-solid border-blue_gray-100 px-3 font-medium"
              />
              <Button
                size="lg"
                className="min-w-[178px] rounded-[14px] px-[34px] font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
