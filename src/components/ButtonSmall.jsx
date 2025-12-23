import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Smallbutton = () => {
  const buttonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  const isThirdStep = location.pathname === "/third";

  const handleClick = () => {
    if (isThirdStep) {
      // On third step, submit the form
      alert("Form submitted successfully!");
    } else {
      // On second step, navigate to third
      navigate("/third");
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="bg-black cursor-pointer rounded-[6px] text-white w-[280px] h-[44px]"
    >
      Continue {isThirdStep ? 3 : 2}/3
    </button>
  );
};

export default Smallbutton;
