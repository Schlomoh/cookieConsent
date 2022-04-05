import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useShowCookieConsent = () => {
  const [show, setShow] = useState(false);

  const cookiesExist = false;
  useEffect(() => {
    if (!cookiesExist) {
      setShow(true);
    }
  }, [cookiesExist]);

  return [show, setShow] as [boolean, Dispatch<SetStateAction<boolean>>];
};
