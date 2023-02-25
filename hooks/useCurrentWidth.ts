import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

export default function useCurrentWidth() {
  // save current window width in the state object
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const resizeListener = debounce(() => {
    setWidth(window.innerWidth);
  }, 200);

  useEffect(() => {
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);

  return width;
}
