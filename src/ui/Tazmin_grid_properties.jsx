import React from "react";

function Tazmin_grid_properties() {
  return (
    <div className="grid grid-cols-2 gap-x-6  mt-24">
      <div
        className="custom-banners col-span-2 lg:col-span-1 flex-col">
        <img src="/home-banners/freelance-home.png" loading="lazy" alt="freelancer" />
        <h3 className="font-DanaBold lg:text-xl lg:leading-8  m-0 text-black_base">جزء برترین پلتفرم های فریلنسینگ ایران</h3>
        <p className="lg:leading-10 font-DanaMedium pb-12 text-black_base">تضمین،جزء بهترین های ایران است. پروژه های خود را به راحتی برون سپاری کنید و برای انجام آن ها به بهترین شکل ممکمن،نیروی متخصص استخادام کنید.</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 col-span-2 lg:col-span-1 mt-8 lg:mt-0 gap-y-4 gap-x-6 ">
        <div className="custom-banners flex-col sm:col-span-1 col-span-2  row-span-2">
            <img src="/home-icons-banner/secure-payment.png" className="w-16  mx-auto" alt="" />
            <h3 className="text-xl leading-8 font-DanaBold text-black_base text-center">پرداخت آنی</h3>
            <p className="font-DanaMedium text-sm text-black_base leading-8 ">پس از تایید پروژه توسط کارفرما،هزینه انجام آن بلافاصله به کیف پول شما اضافه میشود</p>
        </div>
        <div className="custom-banners flex-col sm:col-span-1 col-span-2 row-span-2 ">
            <img src="/home-icons-banner/interaction.png" className="w-16  mx-auto" alt="" />
            <h3 className="text-xl leading-8 font-DanaBold text-black_base text-center">تعامل مستقیم</h3>
            <p className="font-DanaMedium text-sm text-black_base leading-8 ">پس از ایجاد پروژه،تمام جزییات آن برای تمامی فریلنسرها قابل مشاهده خواهد بود.</p>
        </div>
        <div className="col-span-2 row-span-1 flex xs:flex-col sm:flex-row  gap-x-4 gap-[68px] mt-4 lg:mt-0 custom-banners">
        <div className="flex flex-col xs:order-2 sm:order-1 items-center text-center my-auto">
            <h3 className="font-DanaBold text-center text-black_base lg:text-xl lg:leading-10 m-0">دسترسی هزاران فریلنسر به پروژه های شما</h3>
            <p className="font-DanaMedium text-black_base lg:text-sm text-center">با ایجاد پروژه،امکان همکاری با هزاران نیروی متخصص را خواهید داشت.</p>
        </div>
        <img src="/home-icons-banner/freelancers-circle.png" className="sm:max-w-[50%] xs:order-1 sm:order-2 object-cover " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tazmin_grid_properties;
