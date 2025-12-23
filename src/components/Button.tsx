import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <button
        type="submit"
        className="button bg-black cursor-pointer rounded-[6px] text-white w-[416px] h-[44px] "
      >
        Continue 1/3
      </button>
    </div>
  );
};

export default Button;
