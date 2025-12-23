import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BackBtn = () => {
  return (
    <div>
      <button className="back-btn bg-none border border-border w-[128px] h-[44px] rounded-[6px] text-black cursor-pointer">
        Back
      </button>
    </div>
  );
};

export default BackBtn;
