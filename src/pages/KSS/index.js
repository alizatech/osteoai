import React from "react";

export default function KSSPage() {
  return (
    <div>
      <head>
        <title>KSS Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </head>
      <div className="container mx-auto px-5 py-5 bg-indigo-200">
        <div className="flex flex-col items-center gap-8">
          {/* Header Section */}
          <div
            className="w-full md:w-3/5 lg:w-2/5 bg-cover bg-no-repeat px-[12px] py-[30px]"
            style={{
              backgroundImage: "url('/public/images/img_frame_19.png')",
            }}
          >
            <img
              className="h-16 w-14 object-contain mx-auto"
              src="images/img_clinics.png"
              alt="Clinics"
            />
            <h1 className="text-center font-montserrat text-[26px] font-bold text-white leading-[34px]">
              Enhancing Joint <br />
              Health
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-4/5">
            <h2 className="text-center text-xl font-bold mb-4">Knee Society Chart</h2>
            <p className="text-sm text-gray-800">
              Please fill in the following KNEE SOCIETY CHART to get the patient’s
              KNEE SOCIETY SCORE
            </p>

            {/* Form Section */}
            <div className="bg-indigo-50 rounded-lg p-5 mt-5">
              <h3 className="text-lg font-medium mb-4">Pain</h3>
              <p>
                <span className="font-normal">• None (50)</span>
                <span className="font-normal">• Mild (45)</span>
                <span className="font-normal">• Moderate (40)</span>
                <span className="font-normal">• Severe (0)</span>
              </p>

              <h3 className="text-lg font-medium mt-4 mb-4">Range of Motion (ROM)</h3>
              <p>
                <span className="font-normal">• Full (125° or more) (25)</span>
                <span className="font-normal">
                  • Reduced (Alt: 125°, subtract 1 point per 5°)
                </span>
              </p>

              <h3 className="text-lg font-medium mt-4 mb-4">Stability</h3>
              <p>
                <span>• None (0)</span>
                <span>• 10 or more (subtract 2 per 5°)</span>
              </p>
              <p>
                <span className="font-normal">
                  9. Stability in Standing <br />
                  • Fully stable (5) <br />
                  • Slightly unstable (3) <br />
                  • Unstable (0)
                </span>
              </p>
            </div>

            <div className="absolute right-[18.42px] top-0 w-[28%] text-[32px] font-bold leading-[48px] text-white-a780 lg:text-[27px] md:text-[26px] sm:text-[24px]">
              <h2>Osteo-Aid</h2>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-between gap-5 mt-[34px] mx-[98px] self-stretch md:flex-wrap">
              <a
                href="https://www.youtube.com/embed/bv@Fxk@sz71"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="min-w-[238px] rounded-[18px] px-[34px] font-opensans font-semibold sm:px-4"
                  style={{ backgroundColor: "blue" }}
                >
                  Submit
                </button>
              </a>
              <button
                className="min-w-[238px] rounded-[18px] px-[34px] font-opensans font-semibold sm:px-4"
                style={{ backgroundColor: "gray" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}