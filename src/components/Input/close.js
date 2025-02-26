import React from "react";

const CloseSVG = ({ fillColor = "#000000", className = "", ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props?.height || 20}
      width={props?.width || 20}
      viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
      <path d="M4.707812 3.2929688 L3.2929688 4.707812 L8.585938 10 L3.2929688 15.292969 L4.707812 16.707031 L10 11.414062 L15.292969 16.707031 L16.707031 15.292969 L11.414062 10 L16.707031 4.707812 L15.292969 3.2929688 L10 8.585938 L4.707812 3.2929688 Z" />
    </svg>
  );
};

export default CloseSVG;
