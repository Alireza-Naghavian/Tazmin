import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { MdAvTimer } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { BsCardText } from "react-icons/bs";
import Small_Blue_base_Btn from '../../ui/Small_Blue_base_Btn';
import LargeBtn from '../../ui/LargeBtn';
function ProjectLists() {
  return (
    <div className='container  px-16  pt-12 pb-9 max-w-[1024px]'>
   <div className="flex items-center mb-8 justify-between   ">
    <h2 className='text-2xl font-DanaBold leading-[43px] m-0 text-black_base'>پروژه ها</h2>
   </div>
    <hr className='h-[2px] bg-gray_base/55 w-full'/>
    <div className='w-full lg:flex-nowrap flex-wrap flex gap-x-4'>

    <div className='mt-10 h-auto w-[70%] relative'>
    <form >
      <input type="search" className='w-full mt-0 max-w-2xl   pr-4 py-2
       text-black_base  border
       border-gray_base/25 flex  items-start rounded-md focus:outline-none' placeholder='جستجو در پروژه ها ...' />
       <button type='submit' className='absolute top-[10px] left-0 pl-2'><FiSearch  size={22} className='text-blue_base'/></button>
    </form>
       </div>
       <div className="w-[30%] bg-gray-200 mt-10 flex  rounded-lg gap-x-4 py-1 px-1 ">
      <button className='bg-white rounded-md text-blue_base font-DanaMedium tr-300 py-1 px-4 w-1/2 text-center'>
        همه پروژه ها
      </button>
      <button className='bg-gray-200 rounded-md text-blue_base font-DanaMedium tr-300 py-1 px-4 w-1/2 text-center'>
        پروژه های باز
      </button>
       </div>
       </div>
       <div className="w-full grid grid-cols-2 gap-x-6 mt-8">
        <div className="flex flex-col gap-y-2 ">
          <span className='font-DanaMedium text-gray_base leading-7 tracking-tighter  pr-2'>
            مرتب سازی بر اساس:
          </span>
          <select className="w-full rounded-xl px-4 py-2 flex bg-gray-200  justify-start focus:outline-none"  >


            <option key={"test"}  className="focus:outline-none focus:border-none rounded-lg bg-white">
            جدیدترین
            </option>
            <option key={"test"}  className="focus:outline-none focus:border-none rounded-lg bg-white">
            قدیمی ترین
            </option>


      </select>
        </div>
        <div className="flex flex-col gap-y-2 ">
          <span className='font-DanaMedium text-gray_base leading-7 tracking-tighter pr-2'>
               دسته بندی:
          </span>
          <select className="w-full rounded-xl px-4 py-2 flex bg-gray-200  justify-start focus:outline-none"  >


            <option key={"test"}  className="focus:outline-none focus:border-none rounded-lg bg-white">
            تولید محتوا
            </option>
            <option key={"test"}  className="focus:outline-none focus:border-none rounded-lg bg-white">
            قدیمی ترین
            </option>
      </select>
        </div>
       </div>

       <div className="mt-24 flex flex-col  justify-start pr-2">
        <span className="text-sm font-DanaMedium text-black_base pb-4">
          تعداد یافته ها :

          <span className='font-DanaBold text-black'>23 پروژه</span>
        </span>
        <hr className='h-[2px] bg-gray_base/55 w-full'/>
       </div>
       <div className="mt-10 border border-blue_base rounded-lg  py-5 overflow-hidden w-full px-[22px]">
        <div className="flex gap-8 justify-between">
          <div className="flex flex-col gap-4">
            {/* project title */}
            <Link className='text-blue_base font-DanaMedium text-lg w-fit cursor-pointer'>
            طراحی افزونه وردپرس برای یک فروشگاه اینترنتی
            </Link>
            {/* project desc */}
            <div className="font-Dana text-gray_base leading-7 text-sm">
            یک فروشگاه اینترنتی فعال در حوزه پوشاک، همزمان در دیجی کالا و وب سایت خودش که تحت وردپرس است فعالیت می کند. 
به یک افزونه نیاز داریم که کامنت های محصولات ما(از جمله نام نظر دهنده، تعداد امتیاز داده شده و متن نظر)
          </div>
          {/* project tags */}
          <div className="flex items-center flex-wrap gap-2 ">
            <div className="flex items-center  gap-x-4 flex-wrap">
              <span className="text-gray_base text-xs leading-6 font-Dana">مهارت ها :</span>
                <span className="font-DanaMedium text-gray_base m-0 text-xs leading-6">ورد پرس </span>
                <span className="font-DanaMedium text-gray_base m-0 text-xs leading-6">پی اج پی</span>
                <span className="font-DanaMedium text-gray_base m-0 text-xs leading-6">my sql</span>
                <span className="font-DanaMedium text-gray_base m-0 text-xs leading-6">SQL</span>
            </div>
          </div>
          </div>
          <div className="min-w-max flex flex-col gap-2 w-[220px] flex-shrink-0">
            <div className="flex gap-x-2 ">
            <MdAvTimer size={22} className='text-blue_base' />
            <span className='font-DanaBold leading-7 text-gray_base'>
              22/4/1401
            </span>
            </div>
            <div className="flex gap-x-2 ">
            <BsCardText   size={22} className='text-blue_base' />
            <span className='font-DanaBold leading-7 text-gray_base'>
            4 پیشنهاد
            </span>
            </div>
            <div className="flex gap-x-2 ">
            <BiWallet  size={22} className='text-blue_base' />
            <span className='font-DanaBold leading-7 text-gray_base'>
             2,000,000 تومان
            </span>
            </div>
            <div className="mt-auto ">
            <LargeBtn py='py-2' type={"button"}>مشاهده پروژه</LargeBtn>
            </div>
          </div>
        
        </div>
       </div>

    </div>
  )
}

export default ProjectLists