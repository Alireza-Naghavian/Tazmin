import React from "react";
import { Link } from "react-router-dom";
import Small_Blue_base_Btn from "./Small_Blue_base_Btn";

function Owner_Banner({ role, title, desc, cover, btn_title }) {
  return (
    <div className="2xl:gap-[96px] md: flex flex-col md:flex-row md:p-[56px] sm:p-6 sm:px-4 xs:py-2 mt-24 bg-[#f8f8f8] rounded-lg sm:rounded-3xl">
      <div className="flex 2xl:gap-8 lg:gap-7 justify-center flex-col xs:px-2 sm:px-0 sm:pr-8">
        <span className="sm:text-sm xs:text-xs font-DanaBold leading-7 sm:m-0 mt-2 sm:mt-0 text-blue_base ">
          {role}
        </span>
        <h2 className="lg:text-3xl sm:text-xl text-lg lg:leading-[47px] sm:leading-10 xs:mt-3 sm:mt-0 m-0 font-DanaBold text-black_base">
          {title}
        </h2>
        <p className="lg:text-base text-sm text-black_base font-DanaMedium leading-6 mt-4 lg:mt-0 ">
          {desc}
        </p>
        <div className="block items-center w-full lg:-mt-10">
          <Link>
            <Small_Blue_base_Btn px="px-8" py="py-3" size="lg">
              {btn_title}
            </Small_Blue_base_Btn>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center shrink-0 md:max-w-[50%]">
        <img src={`/home-banners/${cover}`} alt="" />
      </div>
    </div>
  );
}

export default Owner_Banner;
