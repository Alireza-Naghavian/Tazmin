import React from "react";
import TazminLinkLogo from "./TazminLinkLogo";
import SocialMedias from "./SocialMedias";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full my-0 mx-auto max-w-[1280px] pt-8 px-10 pb-7  ">
      <div className="flex justify-between sm:flex-row flex-col  box-border">
        <div className="flex md:flex-wrap sm:flex-row flex-col  justify-between w-full -mr-2  whitespace-nowrap md:max-w-[50%]  ">
          <div className="pr-2 pt-2 flex  flex-col gap-y-8">
            <TazminLinkLogo />
        
            <div className="">
              <div className="my-4 sm:mx-0  flex   justify-center font-DanaMedium text-gray_base gap-x-4  ">
                <Link>
                  <span className="w-full h-full text-base ">راهنما</span>
                </Link>
                <Link>
                  <span className="w-full h-full text-base ">درباره تضمین</span>
                </Link>
              </div>
              <div className="">
                <SocialMedias />
              </div>
            </div>
          </div>
          <div className="pr-2 pt-2  lg:max-w-[25%]   max-w-[20%]   m-0 lg:mr-auto md:mr-8 sm:mr-auto  xs:mx-auto sm:mx-0 md:mx-auto  relative  ">
            <div className="flex gap-2 justify-center mt-12    ">
              <img
                src="/logo/enamad.jpg"
                className="object-cover h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/logo/footer-image.png" alt="" />
        </div>
      </div>
      <div className="w-full border-t border-gray_base mt-2 h-full flex items-center justify-center">
        <h6 className="text-center text-gray_base font-Dana  mt-6 w-full">
          این وب سایت صرفا جهت نمونه کار است.
        </h6>
      </div>
    </div>
  );
}

export default Footer;
