import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Valid_text_field from "../../ui/Valid_text_field";
import CurrencyInput from "react-currency-input-field";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import LargeBtn from "../../ui/LargeBtn";
import useSendReq from "./hooks/useSendReq";
import Loader from "../../ui/Loader";

function Send_req_form({ setIsOpen, projectId }) {

  const [price, setPrice] = useState(null);
  const {sendLoading,sendProposal} = useSendReq()
  let servicePay = Number(price / 10);
  let finalPrice = Number(price - servicePay);
  const {
    handleSubmit,
    register,
  } = useForm();
  const send_req_handler= (data)=>{
    const {duration,price,description} = data
    const sanitizedValue = Number(price.replace(/,/g, ''));
    let validData = {
        duration,price:sanitizedValue,description
    }
   console.log({...validData,projectId});
   sendProposal({projectId,...validData},{onSuccess:()=>{
    setIsOpen(false)
   }})
  }
  return (
    <div className="px-2  pt-8 z-50  pb-9">
      <form className="flex flex-col" onSubmit={handleSubmit(send_req_handler)}>
        <div className="w-full flex sm:flex-row flex-col gap-y-4 gap-x-3 sm:max-h-[200px] items-center">
          <div className="flex flex-col gap-y-4 sm:w-1/2 w-full  min-h-[150px] max-h-[150px] h-full">
            <div className="">
              <label className="text-sm" htmlFor="price">
                کل پیشنهاد شما (تومان) :
              </label>
              <CurrencyInput
                className={`w-full mt-0 max-w-2xl py-2 pr-4  text-black_base  border
                  border-gray_base/25 flex  items-start rounded-md focus:outline-none`}
                placeholder="2,000,000 تومان"
                allowDecimals={false}
                value={price}
                onValueChange={(value) => setPrice(value)}
                name="price"
                id={"price"}
                min={0}
                {...register("price", {
                  required: "اضافه کردن مبلغ الزامی است",
                  minLength: {
                    value: 6,
                    message: "مبلغ باید از ۱۰۰ هزار تومان بیشتر باشد",
                  },
                })}
                step={10}
              />
            </div>
            <div className="">
              <Valid_text_field
                label={"زمان تحویل (روز)"}
                register={register}
                validationSchema={{
                  required: "اضافه کردن زمان تحویل الزامی است",
                }}
                name={"duration"}
                type="number"
                placeHolder={"مثلا : ۱۰ روز"}
              />
            </div>
          </div>
          <div className="sm:w-1/2 w-full bg-gray-200 rounded-lg p-2  sm:min-h-[155px] sm:max-h-[155px]">
            <div className="flex flex-col gap-y-4">
              <p className="flex justify-between px-2 mt-2">
                <span className="text-gray_base font-DanaMedium text-sm">
                  کل پیشنهاد شما:
                </span>
                <span className="text-gray_base font-DanaMedium text-sm">
                  {price == null
                    ? "0"
                    : price && toPersianNumbersWithComma(price)}{" "}
                  تومان
                </span>
              </p>
              <p className="flex justify-between px-2 mt-2">
                <span className="text-gray_base font-DanaMedium text-sm">
                  هزینه خدمات:
                </span>
                <span className="text-gray_base font-DanaMedium text-sm">
                  {!servicePay
                    ? "0"
                    : servicePay && toPersianNumbersWithComma(servicePay)}
                  تومان
                </span>
              </p>
              <p className="flex justify-between px-2 mt-2">
                <span className="text-blue_base font-DanaBold text-base ">
                  مبلغ نهایی دریافت شما:
                </span>
                <span className="text-blue_base font-DanaBold text-base">
                  {!finalPrice
                    ? "0"
                    : finalPrice && toPersianNumbersWithComma(finalPrice)}
                  تومان
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-14 flex flex-col justify-center items-start">
          <label className=" mb-1" htmlFor="price">
            توضیحات
          </label>
          <span className="text-xs text-black_base font-DanaMedium mb-2">
            این توضیحات فقط برای کارفرما قابل مشاهده است
          </span>
          <textarea
            name="description"
            {...register("description", {
              required: "پرکردن این فیلد الزامی است",
            })}
            className="w-full border bg-gray-200/55 pt-2 pr-2 focus:outline-none"
            placeholder="توضیحات لازم  برای پروژه را بنویسید..."
            cols="30"
            rows="5"
          
          ></textarea>
        </div>
        <div className="  w-fit mr-auto gap-x-4 flex mt-8">
          <div className="justify-end w-fit mr-auto">
            <button
              onClick={()=>setIsOpen(false)}
              className={`largeBtn  bg-error
                px-10 tr-300 
              rounded-lg text-center text-white`} >
              لغو
            </button>
          </div>
          <div className="justify-end w-fit mr-auto">
            <LargeBtn  bg="bg-blue_base" hover=""  type={"submit"}>{sendLoading ? <Loader height="25" width="80" color="white"/>:"ثبت پیشنهاد"}</LargeBtn>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Send_req_form;
