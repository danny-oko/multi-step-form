import { Routes, Route } from "react-router-dom";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-main">
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/second-step" element={<SecondStep />} />
        <Route path="/third-step" element={<ThirdStep />} />
      </Routes>
    </div>
  );
}
