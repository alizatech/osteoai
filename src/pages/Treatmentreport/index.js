import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function TreatmentReportPage() {
  return (
    <>
      <Helmet>
        <title>3S Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="flex bg-indigo-200 w-full h-screen">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-grow p-4 overflow-y-auto">
          <Header />

          {/* Main Content */}
          <div className="bg-[url('/public/images/img_frame_10.png')] bg-cover bg-no-repeat px-[12px] py-[18px] lg:h-auto md:h-auto sm:flex-col sm:p-4">
            <div className="flex flex-col gap-[24px] items-center text-center">
              {/* Logo */}
              <img
                src="/images/img_logo.png"
                alt="Logo"
                className="h-[144px] w-auto object-contain"
              />
              <h1 className="text-[29px] lg:text-[34px] font-bold text-white leading-[44px]">
                Enhancing Joint Health
              </h1>
            </div>

            {/* Report Title */}
            <div className="bg-gray-800 rounded-[24px] p-[24px] text-center mt-[30px]">
              <h2 className="text-[29px] text-white font-bold tracking-[0.7px]">
                Treatment Diagnosis Summary Report
              </h2>
              <img
                src="/images/img_medical_logo_2.png"
                alt="Medical Logo"
                className="h-[96px] w-auto mx-auto mt-4 object-contain"
              />
            </div>

            {/* Patient Demographics */}
            <div className="mt-8">
              <h3 className="text-[24px] font-semibold text-gray-800 tracking-[0.4px]">
                Patient Demographics
              </h3>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span className="text-gray-900">Alisa Rafique</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Patient ID:</span>
                  <span className="text-gray-900">5873</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Gender:</span>
                  <span className="text-gray-900">Female</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Results */}
            <div className="mt-8">
              <h3 className="text-[24px] font-semibold text-gray-800 tracking-[0.4px]">
                Diagnostic Results
              </h3>
              <div className="mt-4">
                <strong>Knee Society Score:</strong> 30
                <p className="text-gray-700 mt-2">
                  If the score is below 40, surgical intervention is recommended.
                  If the score is above 40, non-surgical treatment is preferred.
                </p>
              </div>
            </div>

            {/* Treatment Plan */}
            <div className="mt-8">
              <h3 className="text-[24px] font-semibold text-gray-800 tracking-[0.4px]">
                Treatment Plan
              </h3>
              <div className="mt-4">
                <strong>Non-Surgical Treatment Plan (if Knee Society Score is above 40):</strong>
                <ul className="list-disc pl-5 mt-2">
                  <li>Medications</li>
                  <li>Physical Therapy</li>
                  <li>Assistive Devices</li>
                  <li>Lifestyle Adjustments</li>
                </ul>
                <br />
                <strong>Surgical Treatment Plan (if Knee Society Score is below 40):</strong>
                <p className="mt-2">
                  Total Knee Replacement (TKR): When there is widespread joint damage across the
                  entire knee. The joint is replaced with an artificial implant made of metal,
                  ceramic, or plastic components to restore joint function. <br />
                  After surgery, rehabilitation is required.
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button className="px-4 py-2 bg-blue-600 text-white rounded shadow">
                Save Report
              </button>
              <button className="px-4 py-2 bg-gray-400 text-black rounded shadow">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}