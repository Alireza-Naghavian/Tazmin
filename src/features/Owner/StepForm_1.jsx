import React, { useState } from "react";

function StepForm_1({ categories, register, setRenderStep }) {
  const [checkCat, setCheckCat] = useState(null);
  const renderHandler = (itemValue) => {
    setCheckCat(itemValue);
    setRenderStep(2);
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-x-4 gap-y-4 mt-8 z-0">
      {categories &&
        categories.map((item) => {
          return (
            <div
              onClick={()=>renderHandler(item?.label)}
              className={`relative outline-none m-0 cursor-pointer bg-white 
          flex justify-center items-center box-border
          text-center font-DanaMedium appearance-none tr-300  h-full gap-3  px-6 py-8 rounded-md border 
          `}
              key={item?.value}
            >
              <input
                id={item?.label}
                name={"category"}
                value={item?.value}
                {...register("category")}
                type="radio"
                className="w-full h-full absolute z-10"
              />
              <label
                className={`absolute 
             tr-300 z-20 text-sm  cursor-pointer 
              w-full h-full flex items-center px-2 gap-x-2 ${
                checkCat === item.label ? "bg-blue_base text-white" : "bg-white"
              }`}
                htmlFor={item?.label}
              >
                <img src={item?.icon[0]} className="w-6 h-6" alt="" />
                {item?.label}
              </label>
            </div>
          );
        })}
    </div>
  );
}

export default StepForm_1;
