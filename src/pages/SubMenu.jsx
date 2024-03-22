import React from "react";
import { Link } from "react-router-dom";

function SubMenu({mainSubItem,mainSubDesc,secondSubItem,secondSubDesc,lastSubItem,lastSubDesc,base_color,bg_img}) {
  return (
    <div className="z-50 bg-white absolute left-0 top-16 whitespace-break-spaces w-full min-h-[380px] shadow-md cursor-default">
      <div className="flex flex-wrap w-full h-auto py-[30px] px-10  gap-8 bg-white">
        <div className="absolute top-[2px] right-0 h-full w-full z-20 custom-shadow"></div>
        <div className="flex flex-col gap-5 font-DanaBold z-20 text-black_base">
          <Link
            className={`h-[120px] w-[312px] min-h-[56px] rounded-lg
                 px-4 flex flex-col justify-center shadow-md 
                 custom-right-border ${base_color}  tr-300 hover:bg-hover`}
          >
            <span
              className="text-[14px] leading-7 m-0 font-DanaBold 
             text-black_base z-20"
            >
              {mainSubItem}
            </span>
            <span className="text-xs leading-6 font-Dana m-0 z-20 text-gray_base ">
              {mainSubDesc}
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-black_base z-20">
          <Link className="w-[300px] px-4 py-2 rounded-lg tr-300 hover:bg-hover">
            <div className="text-sm leading-7 text-black_base font-DanaBold">
              {secondSubItem}
            </div>
            <div className="text-xs leading-6 m-0 font-Dana text-gray_base">
              <span>{secondSubDesc}</span>
            </div>
          </Link>
          <Link className="w-[300px] px-4 py-2 rounded-lg  tr-300 hover:bg-hover">
            <div className="text-sm leading-7 text-black_base font-DanaBold">
          {lastSubItem}
            </div>
            <div className="text-xs leading-6 m-0 font-Dana text-gray_base">
              <span>
          {lastSubDesc}
              </span>
            </div>
          </Link>
        </div>
        {/* stats & diagrams */}
        <div className=" flex flex-col gap-5 text-black_base z-20">
          <span className="text-base font-DanaBold text-black_base self-start m-0">
            آمار
          </span>
          <span className="text-sm font-DanaBold leading-7 m-0 text-black_base ">
            <span className="ml-2 ">2</span>
            <span className="font-Dana">
              <strong className="font-DanaBold">پروژه </strong>ثبت شده است.
            </span>
          </span>
          <span className="text-sm font-DanaBold leading-7 m-0 text-black_base ">
            <span className="ml-2 ">10</span>
            <span className="font-Dana">
              <strong className="font-DanaBold">درخواست </strong>دریافت شده است.
            </span>
          </span>
          <span className="text-sm font-DanaBold leading-7 m-0 text-black_base ">
            <span className="ml-2 ">2</span>
            <span className="font-Dana">
              <strong className="font-DanaBold">درخواست </strong>تایید شده است.
            </span>
          </span>
        </div>
        <div className="absolute h-full w-[600px] left-0 top-0 ">
          <div className="absolute  z-10 w-full h-full bg-gradient-to-r from-[#ffffffa6] from-1% to-white to-90% "></div>
          <img
            src={`../../public/menu-photo/${bg_img}`}
            loading="lazy"
            className="absolute h-full w-full inset-0 object-cover text-transparent  "
            alt="header-img"
          />
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
