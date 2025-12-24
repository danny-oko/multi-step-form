import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={handleBack}
        className="back-btn bg-none border border-border w-[128px] h-[44px] rounded-[6px] text-black cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};

export default BackBtn;
