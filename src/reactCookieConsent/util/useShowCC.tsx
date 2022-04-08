import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CookieUtil from "./cookieUtil";

export const useShowCookieConsent = () => {
  const [show, setShow] = useState(false);
  let cookiesExist = false;
  const cookieObj = CookieUtil.readCookies();
  if (cookieObj != undefined) cookiesExist = true;
  console.log(cookieObj);

  useEffect(() => {
    if (!cookiesExist) {
      setShow(true);
    }
  }, [cookiesExist]);

  return [show, setShow] as [boolean, Dispatch<SetStateAction<boolean>>];
};
