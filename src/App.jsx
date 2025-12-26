// App.jsx
import { useState } from "react";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";
import Final from "./steps/Final.jsx";

export default function App() {
  const steps = [FirstStep, SecondStep, ThirdStep, Final];

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
    date: "",
    img: null,
  });

  const CurrentStep = steps[step];

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-main">
      <CurrentStep
        formData={formData}
        setFormData={setFormData}
        step={step}
        totalSteps={steps.length}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}
