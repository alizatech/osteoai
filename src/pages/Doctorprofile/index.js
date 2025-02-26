import { Helmet } from "react-helmet";
import React from "react";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";

export default function DoctorProfilePage() {
  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full bg-indigo-200 py-[26px] sm:py-4">
        <div className="container-xs mb-8 lg:px-5 sm:px-5">
          <div className="flex items-start gap-9">
            <Sidebar3 />
            <div className="w-[21%] flex flex-col items-center">
              <Header className="self-stretch md:flex-col">
                <div
                  className="m-7 rtl-[22px] self-stretch md:m-0"
                  style={{
                    backgroundImage: "url(/public/images/img_frame_19.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex items-center sm:flex-col">
                    <div className="relative h-[150px] w-[20%] sm:w-full">
                      <img
                        src="images/img_ellipse_4_144x168.png"
                        alt="Image"
                        className="absolute bottom-0 left-0 top-0 my-auto h-[144px] w-[66%] object-contain"
                      />
                      <img
                        src="images/img_ellipse_4.png"
                        alt="Image"
                        className="absolute bottom-[-1px] left-0 m-auto h-[144px] w-[66%] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Header>
              <h2
                className="w-[24%] self-end text-center font-montserrat text-[36px] font-bold leading-[43px] text-white-a700 lg:text-[39px] sm:text-[28px]"
              >
                Enhancing Joint
                <br />
                Health
              </h2>
            </div>
          </div>

          <div>
            <h2
              className="mt-[46px] text-[25px] font-bold tracking-[-0.5px] text-gray-800_02 lg:text-[21px]"
            >
              Doctors Profile
            </h2>
            <div className="mt-[42px] flex w-[48%] justify-center rounded-[20px] bg-white-a700 px-[38px] py-[58px] shadow-xl lg:w-full md:w-full">
              <div className="mb-[21px] flex w-full items-start sm:flex-col">
                <img
                  src="images/img_ellipse_124.png"
                  alt="Image"
                  className="w-[24%] rounded-[66px] object-contain sm:w-full"
                />
                <div className="mt-1 flex flex-col items-start self-end px-5 sm:self-stretch">
                  <h3
                    className="ml-4 text-[27px] font-bold tracking-[-0.54px] text-gray-800_02 lg:text-[22px] md:text-[21px]"
                  >
                    Dr. Hania
                  </h3>
                  <h4
                    className="ml-4 text-[27px] font-medium tracking-[-0.54px] text-gray-400_01 lg:text-[22px] md:text-[21px]"
                  >
                    Orthopedic Surgeon
                  </h4>
                  <div
                    className="relative mt-4 h-[34px] self-stretch"
                  >
                    <h5
                      className="absolute bottom-[-0.59px] left-[-13px] m-auto text-[20px] font-normal tracking-[-0.40px] text-black-900 lg:text-[17px]"
                    >
                      hania12@gmail.com
                    </h5>
                    <img
                      src="images/img_gmail_logo.png"
                      alt="Gmail logo"
                      className="absolute bottom-0 left-0 top-0 my-auto h-[10px] w-[14%] object-contain"
                    />
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
