import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

function AboutUs() {
  return (
    <div className=" ">
      <div className="">
        <Header>
          <Outlet />
        </Header>
      </div>
      <AboutUs_Content />
      <div className="border-t border-t-gray_base w-full mt-16  ">
      <Footer />
    </div>
    </div>
  );
}
const AboutUs_Content = () => {
  return (
    <div className="mx-auto max-w-[1280px] sm:px-16  px-6 pt-[64px]  ">
      <div className="grid lg:grid-cols-2 gap-x-4 lg:gap-y-0 gap-y-4">
        <div className=" flex flex-col gap-y-2 text-black_base">
          <h2 className="font-DanaBold text-black_base text-2xl text-right ">
            درباره ما
          </h2>
          <span className="w-full font-DanaBold"> به تضمین خوش آمدید!</span>
          <p className="font-DanaMedium md:text-lg text-right whitespace-break-spaces text-black_base lg:leading-7 leading-8 mt-2">
            با سلام به تمامی کاربران و بازدیدکنندگان سایت تضمین. از اینکه شما به
            سایت تضمین سر زده‌اید، بسیار خوشحالیم. تضمین یک پلتفرم ایرانی است که
            به منظور ایجاد ارتباط بین کارفرما و فریلنسران ایجاد شده است. هدف
            اصلی ما ایجاد یک محیط مطمئن و امن برای هر دو طرف است تا بتوانند
            بهترین تجربه ممکن را در انجام پروژه‌ها و کارهای خود داشته باشند. در
            تضمین، کارفرماها می‌توانند به راحتی با فریلنسران متخصص در زمینه‌های
            مختلف ارتباط برقرار کنند و پروژه‌های خود را با کیفیت بالا و به زمان
            معین انجام دهند. همچنین، فریلنسران می‌توانند به راحتی به پروژه‌های
            جدید دسترسی پیدا کنند و با کارفرماهای معتبر همکاری کنند.
          </p>
        </div>
        <div className="">
            <img src="/home-banners/intro.png" className="w-full h-full " alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
