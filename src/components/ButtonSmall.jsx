import React from "react";
import { useNavigate } from "react-router-dom";

const Smallbutton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-black cursor-pointer rounded-[6px] text-white w-[280px] h-[44px]"
    >
      Continue 2 / 3
    </button>
  );
};

export default Smallbutton;
