import { useEffect, useRef, useState } from "react";

const useIsElementVisible = (offset = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef(null);

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  });

  return [isVisible, currentElement];
};

export default useIsElementVisible;