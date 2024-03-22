import { Link } from "react-router-dom";
import Small_Blue_base_Btn from "./Small_Blue_base_Btn";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiper_Large_Slider from "./Swiper_SLider";
import Home_slogans from "./Home_slogans";
import Home_Desktop_Slogans from "./Home_Desktop_Slogans";

function Main_Hero_Header({ user, isUserLoading }) {
  return (
    <div className="grid grid-cols-2   ">
      <div className="  md:col-span-1 col-span-2  xl:mt-12 xl:mb-[68px] lg:mt-10 lg:mb-[57px] md:mt-8 md:mb-12 mb-0 sm:mt-6 xs:mt-4">
        <div className="w-full">
          <h1
            className="font-DanaBold  flex flex-col flex-wrap md:text-right 
          text-center lg:text-[51px] md:text-[38px] sm:text-[41px] text-xl 
          md:leading-[72px] sm:leading-[64px] lg:mb-[22px] lg:leading-[80px]
           text-black_base"
          >
            <span className="md:block flex justify-center">
              <span className="flex md:flex-wrap md:w-10 md:text-right text-center  ">
                تضمین;
              </span>
              ارتباط،همکاری <span>موفقیت</span>
            </span>
          </h1>
        </div>
        <p className="font-DanaMedium text-black_base text-base leading-7 md:text-right text-center md:mt-0 mt-8">
          تضمین به شما کمک می کند تا با بهترین ها،موفق ترین همکاری را داشته
          باشید.
        </p>
        {user?.role === "FREELANCER" ? (
          <Link>
            <Small_Blue_base_Btn>ارسال درخواست</Small_Blue_base_Btn>
          </Link>
        ) : user?.role === "OWNER" ? (
          <Link>
            <Small_Blue_base_Btn>ایجاد سریع پروژه</Small_Blue_base_Btn>
          </Link>
        ) : (
          ""
        )}
        <div className="flex items-center justify-center gap-x-2 px-4 py-px rounded-2xl md:w-fit w-max mx-auto md:mx-0 -mt-10 gap-4 mb-[100px] font-Dana bg-[#F3F2F0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 17"
            width="14"
            height="16"
            fill="#fdd244"
          >
            <path d="M13.917 2.695A9.834 9.834 0 0 1 7.85.415a.573.573 0 0 0-.7 0 9.834 9.834 0 0 1-6.067 2.28.575.575 0 0 0-.412.176.609.609 0 0 0-.171.424v4.2c0 4 2.3 6.941 6.786 8.758.138.056.29.056.428 0 4.485-1.817 6.786-4.758 6.786-8.758v-4.2a.609.609 0 0 0-.17-.424.575.575 0 0 0-.413-.176Zm-2.718 3.442-4.666 4.4a.575.575 0 0 1-.807-.018l-1.945-2a.6.6 0 0 1-.185-.428.615.615 0 0 1 .17-.435.582.582 0 0 1 .423-.176.57.57 0 0 1 .417.191l1.55 1.594 4.254-4.012a.58.58 0 0 1 .42-.157.57.57 0 0 1 .404.194.603.603 0 0 1 .153.432.617.617 0 0 1-.189.416h.001Z"></path>
          </svg>
          <span className="lg:text-base lg:leading-8 m-0 font-Dana text-black_base">
            پرداخت نهایی پس از رضایت کیفیت
          </span>
        </div>
        <Home_Desktop_Slogans />
      </div>

      <Swiper_Large_Slider>
        <Home_slogans />
      </Swiper_Large_Slider>
    </div>
  );
}

export default Main_Hero_Header;
