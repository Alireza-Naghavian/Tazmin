import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import LargeBtn from "../../ui/LargeBtn";
import Loader from "../../ui/Loader";
import useCheckOtp from "./hooks/useCheckOtp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSendOtp from "./hooks/useSendOtp";
import useCountDownTimer from "./hooks/useCountDownTimer";
import { useCookies } from "react-cookie";
function CheckOtpForm({ setStep, phoneNumber, resendOtp, minutes, seconds }) {
  const [cookies,setCookie] = useCookies(["userLogin"]);
  const {
    minutes: resendMinutes,
    seconds: resendSeconds,
    setMinutes,
    setSeconds,
  } = useCountDownTimer();
  const editPhoneHandler =()=>{
    setStep(1)
    setMinutes(0);
    setSeconds(0);
  }
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { checkOtp, isCheckLoading } = useCheckOtp();
  const { sendUserOtp } = useSendOtp();
  const [otp, setOtp] = useState("");
  const setCookieHandler = ()=>{
    const exp = new Date();
    exp.setDate(exp.getDate() + 2);
    setCookie("userLogin","userLoggedIn" , {path:"/",expires:exp})
  }
  const resendHandler = async () => {
    await sendUserOtp(
      { phoneNumber },
      {
        onSuccess: () => {
          setMinutes(1);
          setSeconds(59);
        },
      }
    );
  };
  const chackOtpHandler = async () => {
    setMinutes(1);
    setSeconds(59);
    try {
      const data = await checkOtp({ phoneNumber, otp });
      if(data.message.success) {
        setCookieHandler();
      }
      if (data.message.success === false) {
        throw new Error(JSON.stringify(data.message.message));
      }
      if (data.user.isActive) {
        return navigate("/home", { replace: true });
      }
      if (!data.user.isActive) {
        return navigate("/complete-profile", { replace: true });
      }
      return toast.success([data.message.message]);
    } catch (error) {
      console.log(error);
      if (!error.response) {
        toast.error(JSON.parse(error.message));
      } else {
        toast.error(error.response.data.message);
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
          onClick={() =>editPhoneHandler()}
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
        {(seconds && seconds > 0) || (minutes && minutes > 0) ? (
          <p className="font-DanaMedium text-primary-900 w-fit text-center self-center ">
            مانده تا ارسال مجدد:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        ) : (resendSeconds && resendSeconds > 0) ||
            (resendMinutes && resendMinutes > 0) ? (
          <p className="font-DanaMedium text-primary-900 w-fit text-center self-center ">
            مانده تا ارسال مجدد:
            {resendMinutes < 10 ? `0${resendMinutes}` : resendMinutes}:
            {resendSeconds < 10 ? `0${resendSeconds}` : resendSeconds}
          </p>
        ) : (
          <div
            onClick={resendHandler}
            className="cursor-pointer font-DanaMedium text-primary-900 w-fit text-center self-center"
          >
            ارسال مجدد کد تایید
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOtpForm;
