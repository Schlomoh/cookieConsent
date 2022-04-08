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
    let cookieObject = undefined;
    let documentCookies = document.cookie,
      // get the index of the cookie in which the
      // category selection is stored
      cookiesArray = documentCookies.replaceAll(" ", "").split(";");
    const indexSelectionCookie = cookiesArray.findIndex(
        (el) => el.split("=")[0] === "selection"
      ),
      // the category selection as array
      encrCookieSelections =
        indexSelectionCookie >= 0
          ? cookiesArray[indexSelectionCookie].split("=")[1]
          : "";

    if (encrCookieSelections !== "") {
      const cookieSelections = encrCookieSelections;
      if (cookieSelections) return JSON.parse(cookieSelections);
    }
  }

  static writeCookies(cookieObject: ICookieObject) {
    const strCookieObj = JSON.stringify(cookieObject);
    if (strCookieObj !== "") document.cookie = `selection=${strCookieObj}`;
  }
}

export default CookieUtil;
