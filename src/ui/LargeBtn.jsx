import React from "react";

function LargeBtn({ type, children }) {
  return (
    <button
      type={type}
      className="largeBtn tr-300 hover:bg-blue_base rounded-lg text-center text-white bg-blue_base/55"
    >
      {children}
    </button>
  );
}

export default LargeBtn;
