import React from "react";

function LargeBtn({ type, children ,py = "py-3" }) {
  return (
    <button
      type={type}
      className={`largeBtn  ${py} tr-300 hover:bg-blue_base rounded-lg text-center text-white bg-blue_base/55`}
    >
      {children}
    </button>
  );
}

export default LargeBtn;
