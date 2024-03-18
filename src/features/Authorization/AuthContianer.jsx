import { useState } from "react";
import Auth from "../../pages/Auth";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useForm } from "react-hook-form";
import useSendOtp from "./hooks/useSendOtp";


function AuthContianer() {
  const [step, setStep] = useState(1);
  const {isSendLoading,sendUserOtp} = useSendOtp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendOtpHandler = (data) => {
    sendUserOtp(data,{onSuccess:()=>{
      setStep(2)
    }})
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Auth>
            <SendOtpForm isSendLoading={isSendLoading} register={register} errors={errors} sendOtpHandler={handleSubmit(sendOtpHandler)}/>
          </Auth>
        );
        case 2: 
        return(<Auth>
            <CheckOtpForm setStep={setStep}/>
        </Auth>)
    }
  };
  return <div className="w-full flex justify-center">{renderStep()}</div>;
}

export default AuthContianer;
