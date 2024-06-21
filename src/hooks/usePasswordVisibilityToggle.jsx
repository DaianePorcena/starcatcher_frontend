import { useState } from "react";

const usePasswordVisibilityToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const togglePasswordVisibility = (event, inputRef) => {
    event.preventDefault();
    const inputType = isPasswordVisible ? "password" : "text";
    inputRef.current.setAttribute("type", inputType);
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const handlePasswordChange = (event) => {
    const isFilled = event.target.value !== "";
    setIsPasswordFilled(isFilled);
  };

  return {
    isPasswordVisible,
    togglePasswordVisibility,
    isPasswordFilled,
    handlePasswordChange,
  };
};

export default usePasswordVisibilityToggle;
