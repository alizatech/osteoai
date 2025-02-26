import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar7 from "../../components/Sidebar7";
import React from "react";

export default function UploadXrayPage() {
  return (
    <>
      <Helmet>
        <title>Aliza&#39;s Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-indigo_200_49 py-[34px] sm:py-4">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex gap-10">
            <Sidebar7 />
            <div className="flex flex-1 flex-col gap-[22px]">
              <Header className="md:flex-col md:mr-0">
                <div className="flex flex-row items-start gap-[89px] rounded-[24px] bg-[url(/public/images/img_frame_19.png)] bg-cover bg-no-repeat px-[22px] py-[19px] lg:h-auto md:h-auto sm:flex-col sm:p-4">
                  <Img
                    src="images/img_ellipse_4.png"
                    className="h-[144px] w-[144px] object-contain sm:mb-0 sm:w-full"
                    alt="image"
                  />
                  <div>
                    <Heading
                      size="heading3xl"
                      className="w-[26%] self-end text-center font-montserrat text-[36px] font-bold leading-[44px] text-white_a700 lg:text-[30px] md:text-[30px] sm:w-full sm:text-[28px]"
                    >
                      Enhancing Joint <br />
                      Health
                    </Heading>
                  </div>
                </div>
              </Header>

              <Heading as="h3" className="text-[25px] font-bold tracking-[-0.50px] text-gray_800_02 lg:text-[21px]">
                Upload X-Ray
              </Heading>
              <div className="flex items-start justify-center self-stretch rounded-[12px] border border-solid border-blue_100_19 bg-white_a700 p-6 shadow-6xl md:flex-col sm:p-4">
                <Heading as="h3" className="text-[16px] font-medium text-black_900 lg:text-[13px]">
                  Upload Patient X-Ray Here
                </Heading>
                <div className="mb-[18px] flex flex-1 items-start justify-between gap-5 md:flex-col md:self-stretch">
                  <div className="relative z-[1] md:-m-12 h-[102px] flex flex-col md:mt-0 md:w-full">
                    <Img
                      src="images/img_image_6.png"
                      alt="image"
                      className="absolute left-[-15.80px] top-[19.64px] h-auto flex-1 rounded-[12px] bg-gradient1"
                    />
                  </div>
                  <div className="relative mt-[-2px] flex flex-wrap justify-center gap-1 self-stretch">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[12px] font-normal text-gray_900"
                    >
                      Drop your image here, or
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[12px] font-medium text-indigo_800"
                    >
                      browse
                    </Text>
                  </div>
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[8px] font-normal text-blue_gray_300_01"
                  >
                    Supports: PNG, JPG, JPEG, WEBP
                  </Text>
                </div>
                <Img
                  src="images/img_x.svg"
                  alt="X"
                  className="h-[20px] w-[2%] rounded-[50%]"
                />
              </div>
              <div className="flex w-[44%] justify-between gap-5 lg:w-full md:w-full">
                <Button
                  shape="round"
                  className="min-w-[238px] rounded-[10px] px-[34px] font-opensans font-semibold sm:px-4"
                >
                  Upload
                </Button>
                <Button
                  color="blue_gray_100_04"
                  shape="round"
                  className="min-w-[238px] rounded-[10px] px-[34px] font-opensans font-semibold sm:px-4"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}