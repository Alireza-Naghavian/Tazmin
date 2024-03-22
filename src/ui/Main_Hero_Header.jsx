import { Link } from "react-router-dom";
import Small_Blue_base_Btn from "./Small_Blue_base_Btn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Main_Hero_Header({ user, isUserLoading }) {
  return (
    <div className="grid grid-cols-2   ">
      <div className="  md:col-span-1 col-span-2  xl:mt-12 xl:mb-[68px] lg:mt-10 lg:mb-[57px] md:mt-8 md:mb-12 mb-0 sm:mt-6 xs:mt-4">
        <div className="w-full">
          <h1 className="font-DanaBold  flex flex-col flex-wrap lg:text-[51px] md:text-[38px] sm:text-[41px] md:leading-[72px] sm:leading-[64px] lg:mb-[22px] lg:leading-[80px] text-black_base">
            <span className="flex flex-wrap w-10">تضمین;</span>
            <span>
              ارتباط،همکاری <span>موفقیت</span>
            </span>
          </h1>
        </div>
        <p className="font-DanaMedium text-black_base text-base leading-7 ">
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
        <div className="flex items-center justify-center gap-x-2 px-4 py-px rounded-2xl w-fit gap-4 mb-[100px] font-Dana bg-[#F3F2F0]">
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
        <div className="block -mt-10 ">
          <div className="flex flex-wrap items-center gap-[46px] text-right child:flex child:flex-col child:gap-y-2 child:bg-gray_base/20 child:px-4 child:py-4  child:rounded-3xl">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 41 40"
                width="40"
                height="40"
              >
                <circle
                  cx="12.5"
                  cy="12.354"
                  r="12"
                  fill="#007E46"
                  opacity="0.3"
                ></circle>
                <g
                  stroke="#101828"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  clipPath="url(#employers_svg__a)"
                >
                  <path d="m21.5 38.765 2-8h2l2 8"></path>
                  <path d="m21.319 26.848-8.734 4.78A4 4 0 0 0 10.5 35.14v3.625h28V35.14a4 4 0 0 0-2.085-3.512l-8.734-4.78"></path>
                  <path d="M16.5 16.765a8 8 0 0 1 16 0c0 6-3.582 11-8 11s-8-5-8-11Z"></path>
                  <path d="M16.538 15.977c1.169.5 2.52.788 3.962.788 2.621 0 4.941-.95 6.4-2.411 1.277 1.46 3.306 2.41 5.6 2.41"></path>
                </g>
                <defs>
                  <clipPatp id="employers_svg__a">
                    <path fill="#fff" d="M8.5 7.765h32v32h-32z"></path>
                  </clipPatp>
                </defs>
              </svg>
              <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium ">
                سهولت در استفاده
              </span>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 41 41"
                width="40"
                height="40"
              >
                <circle
                  cx="12.5"
                  cy="12.764"
                  r="12"
                  fill="#007E46"
                  opacity="0.3"
                ></circle>
                <g
                  stroke="#101828"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  clipPath="url(#freelancers_svg__a)"
                >
                  <path d="M33.5 37.764h6v-5.438a2 2 0 0 0-1.515-1.94l-5.833-1.459a1 1 0 0 1-.747-.829l-.412-2.88a6 6 0 0 0 3.507-5.454v-2.748a6.166 6.166 0 0 0-5.815-6.252 5.977 5.977 0 0 0-3.185.8M28.049 32.35l-4.925-1.408a1 1 0 0 1-.716-.82l-.415-2.905s3.726.281 5.507-1.453a10.23 10.23 0 0 1-2-6.738 6.185 6.185 0 0 0-5.761-6.257 6 6 0 0 0-6.239 5.995 10.452 10.452 0 0 1-2 7c1.781 1.734 5.507 1.453 5.507 1.453l-.415 2.905a1 1 0 0 1-.716.82l-4.925 1.408A2 2 0 0 0 9.5 34.273v3.491h20v-3.49a2 2 0 0 0-1.451-1.924Z"></path>
                </g>
                <defs>
                  <clipPath id="freelancers_svg__a">
                    <path fill="#fff" d="M8.5 8.764h32v32h-32z"></path>
                  </clipPath>
                </defs>
              </svg>
              <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium">
                تعامل پویا
              </span>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 41 41"
                width="40"
                height="40"
              >
                <circle
                  cx="12.5"
                  cy="12.764"
                  r="12"
                  fill="#007E46"
                  opacity="0.3"
                ></circle>
                <g
                  stroke="#101828"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  clipPath="url(#projects_svg__a)"
                >
                  <path d="M13.5 25.764v-16h22v16M39.5 29.764h-10v3h-10v-3h-10v10h30v-10Z"></path>
                  <path d="m19.5 19.764 3 3 7-7"></path>
                </g>
                <defs>
                  <clipPath id="projects_svg__a">
                    <path fill="#fff" d="M8.5 8.764h32v32h-32z"></path>
                  </clipPath>
                </defs>
              </svg>
              <span className="lg:text-base lg:leading-8 m-0 text-black_base font-DanaMedium ">
                دریافت آنی وجه
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" bg-white md:col-span-1 col-span-2 ">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full "
          >
            <SwiperSlide>
              <img
                className="w-full  h-full "
                src="../menu-photo/slide-1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full  h-full "
                src="../menu-photo/slide-2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full  h-full "
                src="../menu-photo/slide-3.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Main_Hero_Header;
