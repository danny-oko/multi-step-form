import { Route, Routes } from "react-router-dom";
import FirstStep from "./steps/FirstStep.jsx";
import SecondStep from "./steps/SecondStep.jsx";
import ThirdStep from "./steps/ThirdStep.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstStep />} />
      <Route path="/second-step" element={<SecondStep />} />
      <Route path="/third-step" element={<ThirdStep />} />
    </Routes>
  );
}
