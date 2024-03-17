import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import LargeBtn from "../../ui/LargeBtn";
import Loader from "../../ui/Loader";
function CheckOtpForm({ setStep }) {
  const { register, handleSubmit } = useForm();
  const [otp, setOtp] = useState("");
  const chackOtpHandler =(data)=>{

  }
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-wrap justify-start">
        <span className="font-DanaBold lg:text-xl lg:leading-[48px] text-gray-800">
          وارد شوید
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-gray-800 font-DanaMedium leading-tight">
          کد پیامک‌شده به شماره موردنظر را وارد کنید.
        </span>
        <button
          onClick={() => setStep(1)}
          className="w-fit text-primary-900 text-sm leading-4 font-Dana"
        >
          تغییر شماره موبایل
        </button>
      </div>
      <form onSubmit={handleSubmit(chackOtpHandler)} className="flex flex-col gap-y-8 ">
        <OtpInput
          value={otp}
         
          
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle={{
            width: "100%",
            position: "relative",

            height: "40px",
            display: "flex",
            flexDirection: "row-reverse",
            gap: "8px",
          }}
          inputStyle={{
            border: "1px solid rgb(215,216,217)",
            borderRadius: "2px",
            fontSize: "16px",
            lineHeight: "40px",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
          shouldAutoFocus
        />
        <button className="font-DanaMedium text-primary-900 w-fit text-center self-center ">دریافت مجدد کد</button>
        <LargeBtn  type={"submit"}>تایید</LargeBtn>
      </form>
    </div>
  );
}

export default CheckOtpForm;
