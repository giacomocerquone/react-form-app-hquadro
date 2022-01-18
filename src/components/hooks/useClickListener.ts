import { useEffect } from "react";

const useClickListener = () => {
  const listener = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);
};

export default useClickListener;
