import { useEffect, useState } from "react";

const useHeaderShadow = () => {
const [headerShadow, setHeaderShadow] = useState(false)
const style = {
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  
}
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderShadow(style)
      } else {
        setHeaderShadow("none");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerShadow
};

export default useHeaderShadow;
