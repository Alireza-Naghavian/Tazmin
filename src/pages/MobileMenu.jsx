import React from "react";
import { Link } from "react-router-dom";
import { FiBriefcase, FiMonitor } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";

function MobileMenu() {
  return (
    <nav
      className="bg-white absolute top-[64px] custom-shadow
    min-h-screen w-full z-50 overflow-y-hidden"
    >
      <div className="p-4 ">
        <div className="absolute h-full  w-full left-0 -z-10 bottom-0 bg-no-repeat bg-cover  ">
          <div className="bg-gradient-to-t from-[#ffffffa6] -from-1% to-white to-90% absolute w-full h-full z-10"></div>
        <img src="../../public/menu-photo/header-image.png" className="h-full object-cover" alt="" />
        </div>
        {/* mobile nav-item */}
        <Link to={"/owner/m_menu"} className="flex justify-between items-center gap-2 py-4 px-2 ">
          <div  className="flex gap-x-2 ">
            <FiBriefcase className="w-6 h-[20px]" />
            <span className="sm:text-sm text-xs font-DanaBold leading-7 m-0">
              کارفرمایان
            </span>
          </div>
          <TiPlus className="w-2 h-4 text-blue_base" />
        </Link>
        <hr  className="h-[2px] w-full bg-white/40"/>
        <Link to={"/freelancer/m_menu"} className="flex justify-between items-center gap-2 py-4 px-2 ">
          <div className="flex gap-x-2 ">
            <FiMonitor className="w-6 h-[20px]" />
            <span className="sm:text-sm text-xs font-DanaBold leading-7 m-0">
              فریلنسر ها
            </span>
          </div>
          <TiPlus className="w-2 h-4 text-blue_base" />
        </Link>
        <hr  className="h-[2px] w-full bg-white/40"/>
        <Link className="flex justify-between items-center gap-2 py-4 px-2 ">
          <div>
            <span className="sm:text-sm text-xs font-DanaBold leading-7 m-0">
              درباره تضمین
            </span>
          </div>
          <TiPlus className="w-2 h-4 text-blue_base" />
        </Link>
        <hr  className="h-[2px] w-full bg-white/40"/>
        <Link className="flex justify-between items-center gap-2 py-4 px-2 ">
          <div>
            <span className="sm:text-sm text-xs font-DanaBold leading-7 m-0">
              راهنما
            </span>
          </div>
          <TiPlus className="w-2 h-4 text-blue_base" />
        </Link>
      </div>
    </nav>
  );
}

export default MobileMenu;
