import { useState } from "react";
import Auth from "../../pages/Auth";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useForm } from "react-hook-form";
import useSendOtp from "./hooks/useSendOtp";
import useCountDownTimer from "./hooks/useCountDownTimer";
import { toast } from "react-toastify";
function AuthContianer() {
  const [step, setStep] = useState(1);
  const { isSendLoading, error, sendUserOtp } = useSendOtp();
  const { setMinutes, setSeconds, minutes, seconds } = useCountDownTimer();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const sendOtpHandler = async (data) => {
    try {
      await sendUserOtp(data, {
        onSuccess: () => {
          setStep(2);
          setMinutes(1);
          setSeconds(59);
        },
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
     location.reload();
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
              minutes={minutes}
              seconds={seconds}
              phoneNumber={getValues("phoneNumber")}
              setStep={setStep}
              resendOtp={sendOtpHandler}
            />
          </Auth>
        );
    }
  };
  return <div className="w-full flex justify-center">{renderStep()}</div>;
}

export default AuthContianer;
