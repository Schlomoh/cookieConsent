import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CookieUtil from "./cookieUtil";

export const useShowCookieConsent = () => {
  const [show, setShow] = useState(false);
  const cookieObj = CookieUtil.readCookies();
  let cookiesExist = false;
  if (cookieObj != undefined) cookiesExist = true;

  useEffect(() => {
    if (!cookiesExist) {
      setShow(true);
    }
  }, [cookiesExist]);

  return [show, setShow] as [boolean, Dispatch<SetStateAction<boolean>>];
};
