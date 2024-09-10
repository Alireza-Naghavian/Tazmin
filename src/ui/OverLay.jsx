import React from "react";

function Overlay({ onClose, openCondition }) {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={` fixed w-full h-full  ${
        openCondition ? "opacity-100 visible" : "opacity-0 invisible"
      } inset-0 transition-all duration-200 bg-black/50 z-40`}
    ></div>
  );
}

export default Overlay;