import { Routes, Route, Navigate } from "react-router-dom";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";

export default function App() {
  return (
    <div className="flex items-center justify-between w-full h-[100vh] bg-main">
      <FirstStep />
      <SecondStep />
      <ThirdStep />
    </div>
  );
}
