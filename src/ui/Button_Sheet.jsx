import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import DropDown_Sort from "./DropDown_Sort";
import Status_pr_btn from "./Status_pr_btn";
import LargeBtn from "./LargeBtn";
function Button_Sheet({
  setOpenSheet,
 sheetTitle,
  children
}) {
  return (
    <div className={` h-screen`}>
          <div className="bottom-sheet__header justify-between w-full  ">
                  <span className="bottom-sheet__name">{sheetTitle}</span>

                  <div>
                    <button
                      onClick={() => setOpenSheet(false)}
                      className=" w-fit "
                    >
                      <MdOutlineClose size={22} color="black" />
                    </button>
                  </div>
                </div>
                <div className="sort-list bottom-sheet__body h-full  bg-white  w-full z-50">
  {children}
  </div>
    </div>
  );
}

export default Button_Sheet;
