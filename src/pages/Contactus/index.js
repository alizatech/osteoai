import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import React from "react"; 

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title>Aliza&#39;s Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="full bg-indigo-200_49 py-[34px] sm:px-4">
        <div className="container-xs flex items-start justify-center gap-9 lg:px-5 md:px-5">
          <Sidebar />
          <div className="flex flex-1 flex-col gap-[22px]">
            <Header className="md:flex-col" />
            <div
              className="flex flex-[22px] items-start gap-[88px] rounded-[24px] bg-[url(/public/images/img_frame_19.png)] bg-cover bg-no-repeat px-[22px] py-[18px] lg:h-auto md:h-auto sm:flex-col sm:p-4"
            >
              <Img
                src="images/img_ellipse_4.png"
                alt="image"
                className="mb-5 h-[144px] w-[14%] object-contain sm:mb-0 sm:w-full"
              />
              <Heading
                size="heading3xl"
                as="h1"
                className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white-a700 lg:text-[30px] md:text-[30px] sm:w-full sm:text-[28px]"
              >
                Enhancing Joint
                <br />
                Health
              </Heading>
            </div>
            <div className="flex flex-col items-center gap-5 px-2">
              <a href="#" className="lg:text-[21px]">
                <Heading
                  size="heading6xs"
                  as="h3"
                  className="text-[25px] font-bold tracking-[-0.5px] text-gray-800_02"
                >
                  Contact Us
                </Heading>
              </a>
              <div className="mr-5 self-stretch rounded-[20px] bg-gray-200 px-6 py-9 shadow-3xl md:mr-0 sm:p-4">
                <div className="flex items-center justify-end self-stretch md:mr-0 md:flex-col">
                  <div className="flex flex-col gap-10 md:self-stretch">
                    {/* First Name */}
                    <div className="flex flex-col items-start gap-1.5">
                      <Heading
                        size="text4xl"
                        as="h3"
                        className="font-inter text-[17px] font-medium uppercase text-gray-500_04 lg:text-[14px]"
                      >
                        FIRST NAME
                      </Heading>
                      <Input
                        color="white_A700"
                        size="xl"
                        name="firstName"
                        className="w-[72%] rounded-[14px] border border-solid border-gray-500_7f px-3"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col items-start gap-0.5">
                      <Heading
                        size="text4xl"
                        as="h3"
                        className="font-inter text-[17px] font-medium uppercase text-gray-500_02 lg:text-[14px]"
                      >
                        LAST NAME
                      </Heading>
                      <Input
                        color="white_A700"
                        size="xl"
                        name="lastName"
                        className="w-[72%] rounded-[14px] border border-solid border-gray-500_7f px-3"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col items-start gap-0.5">
                      <Heading
                        size="text4xl"
                        as="h3"
                        className="font-inter text-[17px] font-normal uppercase text-gray-500_02 lg:text-[14px]"
                      >
                        E-MAIL
                      </Heading>
                      <Input
                        color="white_A700"
                        size="xl"
                        name="email"
                        className="w-[72%] rounded-[14px] border border-solid border-gray-500_7f px-3"
                      />
                    </div>
                  </div>
                </div>
                {/* Message Text Area */}
                <TextArea
                  shape="round"
                  name="groupOne"
                  placeholder="LEAVE A MESSAGE FOR US"
                  className="w-[44%] rounded-[14px] border !border-gray-500_7f px-[26px] font-inter uppercase text-gray-500_02 sm:px-4"
                />
                {/* Submit Button */}
                <Button
                  size="3xl"
                  className="mr-5 min-w-[232px] rounded-[20px] px-[14px] font-inter font-medium uppercase md:mr-0 sm:px-4"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
