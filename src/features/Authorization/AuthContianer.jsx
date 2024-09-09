import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Auth from "../../pages/Auth";
import CheckOtpForm from "./CheckOtpForm";
import useCountDownTimer from "./hooks/useCountDownTimer";
import useSendOtp from "./hooks/useSendOtp";
import SendOtpForm from "./SendOtpForm";
function AuthContianer() {
  const [step, setStep] = useState(1);
  const { isSendLoading, error, sendUserOtp } = useSendOtp();
  // const [cookies] = useCookies(["userLogin"]);
  // const { userLogin } = cookies;
  const { setMinutes, setSeconds, minutes, seconds } = useCountDownTimer();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (userLogin) {
  //     navigate("/home", { replace: true });
  //   }
  // }, [cookies.userLogin, navigate]);
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
      // location.reload();
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
