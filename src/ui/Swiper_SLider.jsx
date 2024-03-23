import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Swiper_Large_Slider({ children }) {
  return (
    <div className="h-max md:col-span-1 col-span-2 ">
      <div className=" bg-white  flex justify-center  mx-auto ">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper  mx-auto text-center flex justify-center md:w-[80%] sm:w-[70%] xs:w-[85%]  "
        >
          <SwiperSlide>
            <img
              className="w-full  h-full  "
              src="../menu-photo/slide-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full  h-full  "
              src="../menu-photo/slide-2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full  h-full  "
              src="../menu-photo/slide-3.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {children}
    </div>
  );
}

export default Swiper_Large_Slider;
