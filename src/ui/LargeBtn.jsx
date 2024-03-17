import React from "react";

function LargeBtn({ type, children }) {
  return (
    <button
      type={type}
      className="largeBtn tr-300 hover:bg-primary-900 rounded-lg text-center text-white bg-primary-800"
    >
      {children}
    </button>
  );
}

export default LargeBtn;
