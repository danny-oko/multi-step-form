import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/second");
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="button bg-black cursor-pointer rounded-[6px] text-white w-[416px] h-[44px] "
      >
        Continue 1/3
      </button>
    </div>
  );
};

export default Button;
