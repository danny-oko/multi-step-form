import { Route, Routes } from "react-router-dom";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";
import Final from "./steps/Final.jsx";
const stepper = [FirstStep, SecondStep, ThirdStep];

export default function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-main">
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/second-step" element={<SecondStep />} />
        <Route path="/third-step" element={<ThirdStep />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}
