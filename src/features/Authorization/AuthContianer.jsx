import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useCountDownTimer from "../../hooks/useCountTimeTimer";
import Auth from "../../pages/Auth";
import CheckOtpForm from "./CheckOtpForm";
import useSendOtp from "./hooks/useSendOtp";
import SendOtpForm from "./SendOtpForm";
import { convertToEnglishDigits } from "../../utils/ToEnDigits";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";
function AuthContianer() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const {user} = useUser();
  useEffect(()=>{
    if(user !==undefined && user !==null){
      navigate("/",{replace:true})
    
    }
  },[user,navigate])
  const { isSendLoading, error, sendUserOtp } = useSendOtp();
  const { isActive, minutes, seconds, startCountDown } = useCountDownTimer(
    2,
    0
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const sendOtpHandler = async (data) => {
    const {phoneNumber} = data
    const validPhoneNumber = convertToEnglishDigits(phoneNumber);
    try {
      await sendUserOtp({phoneNumber:validPhoneNumber}, {
        onSuccess: () => {
          setStep(2);
          startCountDown();
        },
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Auth>
            <SendOtpForm
              isSendLoading={isSendLoading}
              register={register}
              errors={error}
              sendOtpHandler={handleSubmit(sendOtpHandler)}
            />
          </Auth>
        );
      case 2:
        return (
          <Auth>
            <CheckOtpForm
              isActive={isActive}
              minutes={minutes}
              seconds={seconds}
              phoneNumber={getValues("phoneNumber")}
              setStep={setStep}
              startCountDown={startCountDown}
              resendOtp={sendOtpHandler}
            />
          </Auth>
        );
    }
  };

  return <div className="w-full flex justify-center">{renderStep()}</div>;
}

export default AuthContianer;
