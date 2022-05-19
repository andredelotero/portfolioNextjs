import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef) => {
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight,
  });

  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions(getDimensions());
      };
      if (myRef.current) {
        setDimensions(getDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [myRef]);

  return dimensions;
};
