import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LargeBtn from "../../ui/LargeBtn";
import Loader from "../../ui/Loader";
import useCheckOtp from "./hooks/useCheckOtp";
import useSendOtp from "./hooks/useSendOtp";
function CheckOtpForm({
  setStep,
  phoneNumber,
  startCountDown,
  isActive,
  minutes,
  seconds,
}) {
  const editPhoneHandler = () => {
    setStep(1);
  };
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { checkOtp, isCheckLoading } = useCheckOtp();
  const { sendUserOtp } = useSendOtp();
  const [otp, setOtp] = useState("");
  const resendHandler = async () => {
    await sendUserOtp(
      { phoneNumber },
      {
        onSuccess: () => {
          startCountDown();
        },
      }
    );
  };
  const chackOtpHandler = async () => {
    try {
      const data = await checkOtp({ phoneNumber, otp });
      if (data.message.success === false) {
        throw new Error(JSON.stringify(data.message.message));
      }
      if (data.user.isActive) {
        return navigate("/", { replace: true });
      }
      if (!data.user.isActive) {
        return navigate("/complete-profile", { replace: true });
      }
    } catch (error) {
      if (!error.response) {
        toast.error(JSON.parse(error.message));
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-wrap justify-start">
        <span className="font-DanaBold lg:text-xl lg:leading-[48px] text-gray-800">
          وارد شوید
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-gray-800 font-DanaMedium leading-tight">
          کد پیامک‌ شده به شماره موردنظر را وارد کنید.
        </span>
        <button
          onClick={() => editPhoneHandler()}
          className="w-fit text-primary-900 text-sm leading-4 font-Dana"
        >
          تغییر شماره موبایل
        </button>
      </div>
      <form
        onSubmit={handleSubmit(chackOtpHandler)}
        className="flex flex-col gap-y-8 "
      >
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

        <LargeBtn type={"submit"}>
          {isCheckLoading ? (
            <Loader height="26" color="rgb(255,255,255)" />
          ) : (
            "تایید"
          )}
        </LargeBtn>
      </form>
      <div className="w-full justify-center flex items-center z-50">
        <p
          className={`${!isActive && "hidden"}
            font-DanaMedium
           text-primary-900 w-fit text-center
            self-center`}
        >
          <span>
            {seconds && seconds < 10 ? `0${seconds}` : seconds} :
            {minutes && minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span>مانده تا ارسال مجدد</span>
        </p>

        <div
          onClick={resendHandler}
          className={`${isActive ? "hidden" : " self-center text-center  "}
              cursor-pointer font-DanaMedium
               text-primary-900 w-fit  `}>
          ارسال مجدد کد تایید
        </div>
      </div>
    </div>
  );
}

export default CheckOtpForm;
