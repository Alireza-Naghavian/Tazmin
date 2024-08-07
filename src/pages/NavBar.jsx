import React, { useState } from "react";
import { FiBriefcase, FiMonitor } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOwnerActive, setIsOwnerActive] = useState(false);
  const [isFreelanceActive, setIsFreelanceActive] = useState(false);
  return (
    <nav className=" hidden md:block ">
      <ul className="md:flex hidden m-0 h-full  gap-6">
   
        <li
          className={`nav-item  `}
          onMouseOver={() => setIsOwnerActive(true)}
          onMouseLeave={() => setIsOwnerActive(false)}
        >
          <div className=" relative flex items-center h-full">
            <div className="nav-title text-gray-800 font-DanaBold flex  items-center gap-2 group tr-300">
              <span className="flex items-center">
                <FiBriefcase className="w-6 h-[20px] group-hover:text-blue_base  " />
              </span>
              <span className="nav-item-title ">کارفرمایان</span>

              <TbPointFilled className="point mt-[3px]  text-blue_base font-bold" />
            </div>
          </div>
          {isOwnerActive && (
            <SubMenu
              mainSubItem={"ایجاد پروژه"}
              isOwnerActive={isOwnerActive}
              mainSubDesc={
                "با ایجاد پروژه امکان تعامل با نیروی متخصص مورد نظر را خواهید داشت."
              }
              secondSubItem={"مشاهده تمام پروژه های ایجاد شده"}
              secondSubDesc={"مشاهده لیست و وضعیت پروژه هایی که ایجاد کرده اید"}
              lastSubItem={"مشاهده درخواست ارسالی فریلنسر"}
              lastSubDesc={
                "مشاهده وضعیت و لیست درخواست هایی که برای پروژه های شما ارسال شده است."
              }
              base_color={"border-blue_base"}
              bg_img={"header-image.png"}
            />
          )}
        </li>
        <li 
          className="nav-item"
          onMouseOver={() => setIsFreelanceActive(true)}
          onMouseLeave={() => setIsFreelanceActive(false)}
        >
          <div className=" relative flex items-center h-full">
            <div className="nav-title text-gray-800 font-DanaBold flex  items-center group gap-2">
              <span className="flex items-center">
                <FiMonitor className="w-6 h-[20px]  group-hover:text-blue_base" />
              </span>
              <span className="nav-item-title">فریلنسر ها</span>

              <TbPointFilled className="point mt-[3px] text-blue_base font-bold" />
            </div>
          </div>
          {isFreelanceActive && (
            <SubMenu
              mainSubItem={"ارسال درخواست و پروپوزال"}
              base_color={"border-error"}
              isFreelanceActive={isFreelanceActive}
              mainSubDesc={
                "پروژه های کارفرمایان را مشاهده کرده و متناسب با توانایی های خود پیشنهاد ارسال کنید"
              }
              secondSubItem={"مشاهده درخواست ها"}
              secondSubDesc={"مشاهده لیست و وضعیت درخواست های ارسال شده"}
              lastSubItem={"مشاهده پروژه های کارفرما"}
              lastSubDesc={"لیست پروژه های ایجاد شده توسط کارفرمایان"}
              bg_img={"header-image-2.png"}
            />
          )}
        </li>

        <li className="nav-item !w-fit">
          <div className=" relative flex items-center h-full">
            <Link to={"/about-us"} className="nav-title text-gray-800 font-DanaBold flex group items-center gap-2">
              <span className="nav-item-title">درباره تضمین</span>
            </Link>
          </div>
        </li>
        <li className="nav-item !w-fit">
          <div className=" relative flex items-center h-full">
            <Link to={"/guide-line"} className=" nav-title text-gray-800 font-DanaBold flex group items-center gap-2">
              <span className="nav-item-title">راهنما</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
