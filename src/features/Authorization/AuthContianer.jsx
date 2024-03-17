import { useState } from "react";
import Auth from "../../pages/Auth";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";

function AuthContianer() {
  const [step, setStep] = useState(2);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Auth>
            <SendOtpForm />
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
