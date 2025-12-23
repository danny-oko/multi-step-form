import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/third") {
      navigate("/second");
    } else if (location.pathname === "/second") {
      navigate("/first");
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="back-btn bg-none border border-border w-[128px] h-[44px] rounded-[6px] text-black cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};

export default BackBtn;
