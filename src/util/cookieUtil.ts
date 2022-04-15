import { ICookieObject } from "../components/globalTypes";
import Cookie from "js-cookie";


class CookieUtil {
  static createCookieObj(selection: string[], all?: string[]): ICookieObject {
    return all?.reduce((accu: any, cookie) => {
      accu = { ...accu, ...{ [cookie]: false } };
      if (selection.includes(cookie)) {
        accu[cookie] = true;
      }
      return accu;
    }, {} as ICookieObject);
  }

  static readCookies(): ICookieObject | undefined {
    const selection = Cookie.get("selection")
    if (selection) return JSON.parse(selection);
  }

  static writeCookies(cookieObject: ICookieObject) {
    const strCookieObj = JSON.stringify(cookieObject)
    if (strCookieObj !== "" && document !== undefined)
      Cookie.set('selection', strCookieObj);
  }
}

export default CookieUtil;
