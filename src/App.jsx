import { Routes, Route, Navigate } from "react-router-dom";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";

export default function App() {
  return (
    <Routes className="w-full h-full flex flex-col items-center justify-center">
      <Route path="/" element={<Navigate to="/first" replace />} />
      <Route path="/first" element={<FirstStep />} />
      <Route path="/second" element={<SecondStep />} />
      <Route path="/third" element={<ThirdStep />} />
    </Routes>
  );
}
