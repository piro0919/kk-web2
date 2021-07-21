import { useEffect, useState } from "react";

export type WindowSize = {
  windowHeight: number;
  windowWidth: number;
};

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowHeight: 0,
    windowWidth: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
