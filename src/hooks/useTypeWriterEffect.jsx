import { useEffect, useRef } from "react";

const useTypeWriterEffect = (text, delay) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      console.log("Element ref is not set");
      return;
    }

    const charArray = text.split("").reverse();
    const typer = setInterval(() => {
      if (!charArray.length) {
        clearInterval(typer);
        return;
      }
      const nextChar = charArray.pop();
      element.innerHTML += nextChar;
    }, delay);

    return () => clearInterval(typer);
  }, [text, delay]);

  return elementRef;
};

export default useTypeWriterEffect;
