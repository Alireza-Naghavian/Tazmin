import React from "react";
import { useForm } from "react-hook-form";
import Large_Text_Field from "../../ui/Large_Text_Field";
import LargeBtn from "../../ui/LargeBtn";
function SendOtpForm({sendOtpHandler,register,errors}) {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-wrap justify-start">
        <span className="font-DanaBold lg:text-xl lg:leading-[48px] text-gray-800 ">
          ثبت نام/ورود
        </span>
      </div>
      <form
        onSubmit={sendOtpHandler}
        className="flex flex-col gap-y-12"
      >
        <Large_Text_Field
          label={"لطفا شماره موبایل خود را وارد کنید"}
          placeholder={"مثلا:۰۹۱۲۱۲۳۴۵۶۷"}
          name={"phoneNumber"}
          id={"phoneNumber"}
          register={register}
          validationSchema={{
            required: "پر کردن این فیلد الزامی است",
            maxLength: {
              value: 11,
              message: "شماره باید حداکثر ۱۱ عدد باشد",
            },
          }}
          required
          errors={errors}
        />
        <LargeBtn type={"submit"}>ادامه</LargeBtn>
      </form>
    </div>
  );
}

export default SendOtpForm;
