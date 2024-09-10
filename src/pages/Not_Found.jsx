import React from 'react'
import LargeBtn from '../ui/LargeBtn'
import { useNavigate } from 'react-router-dom'

function Not_Found() {
    const navigate = useNavigate();
  return (
    <div className='flex md:flex-row flex-col gap-[96px] p-12 min-h-screen items-center justify-center'>
        <div className="">
            <img src="/home-banners/error-404.png" className='w-full h-full' alt="" />
        </div>
    <div className="flex flex-col gap-y-8">
        <h2 className="lg:text-2xl text-lg font-DanaBold text-black_base ">به نظر می‌رسه چیزی که دنبالش هستید اینجا نیست.</h2>
        <h2 className="lg:text-2xl text-lg font-DanaBold text-black_base ">توصیه میکنیم ادامه مسیر را از صفحه اصلی دنبال کنید.</h2>
        <div onClick={()=>navigate("/",{replace:true})} className=" lg:w-1/2 lg:mr-auto mt-4">
        <LargeBtn>بازگشت به صفحه اصلی</LargeBtn>
        </div>
    </div>
    </div>
  )
}

export default Not_Found