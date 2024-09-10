import React from 'react'

function GuideLine_content() {
  return (
    <div className='w-full h-full  max-w-[1920px] '>
        <div className="flex flex-col space-y-6 ">
            <div className="h-[300px] max-h-[350px] px-4  my-auto w-full flex items-center justify-center flex-col gap-y-12">
                <div className=" flex flex-col  items-center ">
                    <h3 className='font-DanaBold my-auto sm:text-3xl text-xl text-center  text-black_base'>چطوری شروع کنم؟</h3>
                </div>
            </div>
            <div className="  px-2 md:px-0 w-full">
                <div className="grid md:grid-cols-2 child:mx-auto relative ">
                        <div className="bg-gray-200/75 mx-auto w-24 h-14 absolute hidden rounded-t-lg text-center 
                         md:flex justify-center items-center text-error/95 text-sm font-DanaMedium 
                         -top-14 right-36  inset-0">
                             فریلنسرها
                        </div>
                        <div className="bg-gray-200/75 mx-auto w-24  h-14 flex justify-center items-center
                         text-blue_base/90 font-DanaMedium text-sm absolute rounded-t-lg text-center 
                          md:-top-14 -top-14 md:-right-36  md:inset-0">
                            کارفرمایان
                        </div>
                    <div className="flex flex-col gap-y-4 px-4 md:items-center items-start rounded-md md:rounded-none rounded-tr-none bg-gray-200/75 w-full">
                        <div className="px-4 py-2">
                            <p className="sm:text-xl text-lg font-DanaBold  text-black_base mt-4">پروژه چیست و چطور کار میکند؟</p>
                        </div>
                        <div className="flex flex-col items-start mt-4 mb-8">
                            <span className=" text-primary-900 mb-2">مراحل ساخت یک پروژه توسط کارفرما:</span>
                            <ul className='flex flex-col space-y-4 mt-2'>
                                <li>1-پس از تایید حساب کاربری توسط ادمین،وارد صفحه ایجاد پروژه ها شوید.</li>
                                <li>2- با دقت توضیح دهید چه کاری باید برای شما انجام شود.</li>
                                <li>۳- پس از ایجاد پروژه  منتظر دریافت پیشنهاد از سمت فریلنسر ها باشید.</li>
                                <li>۴- از صفحه (اتاق کار من) میتوانید پروژه ها خود را مدیریت کنید.</li>
                                <li>۵-پیشنهاد ها فریلنسر هارا بررسی کرده و بهترین آن را تایید کنید.</li>
                                <li>۶-پس از اینکه پروژه خود را تحویل  گرفتید میتوانید پرداخت را برای فریلنسر آزاد کنید</li>
                               
                            </ul>
                        </div>
                    </div>
                    {/* <div className="w-[1px] h-screen  bg-gray-400 "></div> */}
                    <div className="flex flex-col gap-y-4 mt-20 md:mt-0 bg-gray-200/75 w-full relative rounded-md rounded-tr-none md:rounded-none ">
                    <div className="bg-gray-200/55 mx-auto w-24 h-14 absolute md:hidden rounded-t-lg text-center 
                         flex justify-center items-center text-error/95 text-sm font-DanaMedium 
                         -top-14   ">
                             فریلنسرها
                        </div>
                        <div className="px-4 py-2 mr-4">
                            <p className="text-xl font-DanaBold text-black_base mt-4 ">انتخاب پروژه درست !</p>
                        </div>
                        <div className="flex flex-col items-start mt-4 mb-8 mr-10 ">
                            <p className=" text-error mb-2">مراحل ارسال پیشنهاد توسط فریلنسر:</p>
                            <ul className='flex flex-col space-y-4 mt-2'>
                                <li className='flex flex-col gap-y-2'>
                                    <span className='text-lg font-DanaBold'>1-پروژه ها به سه دسته کلی تقسیم می شوند:</span>
                            <div className="flex gap-x-2 child:lg:text-base child:text-sm ">
                            <span className="py-1 rounded-lg w-fit px-2 text-center bg-blue_base text-white">پروژه باز</span>
                                    <span className="py-1 rounded-lg w-fit px-2 text-center bg-error text-white">پروژه بسته</span>
                                    <span className="py-1 rounded-lg w-fit px-2 text-center bg-error text-white">پروژه واگذار شده</span>
                            </div>
                                </li>
                                <li className='font-DanaBold'>2-دقت کنید که برای ارسال پیشنهاد به دنبال پروژه های <strong className='text-blue_base'>باز</strong> بروید.</li>
                                <li>۳-متناسب با مهارت های خودبرای پروژه مورد نظر پیشنهاد ارسال کنید.</li>
                                <li>۴-می توانید از صفحه (اتاق کار من ) وضعیت پیشنهادات خود را بررسی کنید.</li>
                                <li className='tracking-tight'>۵-اگر پیشنهادی از طرف کارفرما تایید شد، کیف پول شما پس از کسر هزینه خدمات شارژ خواهد شد.</li>
                                <li className='font-DanaBold text-wrap'>۶- دقت کنید که تا تایید نهایی از طرف کارفرما دریافت نشود قادر به برداشت وجه از کیف پول خود نخواهید بود </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuideLine_content