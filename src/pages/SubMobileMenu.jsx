import React from "react";
import BackBtn from "../ui/BackBtn";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import TazminLinkLogo from "../ui/TazminLinkLogo";
function SubMobileMenu({role,main_action,base_color,second_item,last_item,target_link_1,target_link_2}) {
  return (
      <div
      className="bg-white absolute  custom-shadow 
      min-h-screen overflow-y-hidden w-full z-50 "
      >
        <TazminLinkLogo/>
      <div className="w-full bg-[rgb(248,248,248)] h-12 flex shadow-md">
        <div>
          <BackBtn icon={<TiArrowRight className="w-8  h-8 mr-2" />} color={"text-blue_base"}>
            <span className="text-sm leading-7">{role}</span>
          </BackBtn>
        </div>
      </div>
      <div className="p-4">
        <span className="flex flex-col gap-4 font-DanaBold">
          <Link to={target_link_1} className={`h-auto w-full min-h-[56px] rounded-lg px-4 flex flex-col justify-center shadow-xl custom-right-border ${base_color}  `}>
            <span className="text-sm leading-7 font-DanaBold z-20 text-black_base m-0">
         {main_action}
            </span>
          </Link>
          <Link to={target_link_2} className="w-full py-2 px-4 rounded-lg flex gap-4 items-center">
            <span className="font-DanaBold text-sm leading-7 text-black_base m-0 z-20">
             {second_item}
            </span>
          </Link>
          <hr className="h-[2px] w-full bg-white/40" />
          <Link to={target_link_2} className="w-full py-2 px-4 rounded-lg flex gap-4 items-center">
            <span className="font-DanaBold text-sm leading-7 text-black_base m-0 z-20">
            {last_item}
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SubMobileMenu;
