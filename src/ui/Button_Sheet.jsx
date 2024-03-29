import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import DropDown_Sort from "./DropDown_Sort";
import Status_pr_btn from "./Status_pr_btn";
import LargeBtn from "./LargeBtn";
function Button_Sheet({
  setOpenFilter,
  openFilter,
  sortOption,
  statusOptions,
  transformedCategories,
}) {
  return (
    <div className={` h-screen`}>
      <div className="bottom-sheet__header justify-between w-full  ">
        <span className="bottom-sheet__name">مرتب سازی بر اساس</span>

        <div>
         
          <button onClick={() => setOpenFilter(false)} className=" w-fit ">
            <MdOutlineClose size={22} color="black" />
          </button>
        </div>
      </div>
      <div className="sort-list bottom-sheet__body h-full  bg-white  w-full z-50">
        <div className=" w-full">
          <div className="w-full flex justify-center xs:px-1 sm:px-1.5  gap-x-4">
            <Status_pr_btn filterField={"status"} options={statusOptions} />
          </div>
          <div className="w-full grid sm:grid-cols-2 px-4 sm:gap-y-0 gap-y-6 gap-x-6 mt-8">
            <DropDown_Sort
              title={"دسته بندی :"}
              filterField={"category"}
              options={[
                { value: "ALL", label: "دسته بندی (همه)" },
                ...transformedCategories,
              ]}
            />
            <DropDown_Sort
              title={"مرتب سازی بر اساس:"}
              filterField={"sort"}
              options={sortOption}
            />
          </div>
        </div>
          <div onClick={()=>setOpenFilter(false)} className="mt-24 px-4 sm:mt-52 pb-8 flex relative w-full sm:child:w-1/2 child:mr-auto  child:mt-auto  mr-auto   xs:mx-auto sm:mx-0 ">
            <LargeBtn bg="bg-blue_base" hover="">اعمال</LargeBtn>
          </div>
      </div>
    </div>
  );
}

export default Button_Sheet;
