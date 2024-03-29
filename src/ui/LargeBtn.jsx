import React from "react";

function LargeBtn({ type, children ,py = "py-3" ,hover ="hover:bg-blue_base" ,bg="bg-blue_base/55" }) {
  return (
    <button
      type={type}
      className={`largeBtn  ${py} tr-300 ${hover} rounded-lg text-center text-white ${bg} `}
    >
      {children}
    </button>
  );
}

export default LargeBtn;
