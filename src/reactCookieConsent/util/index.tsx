const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  
    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };
  
  const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };

class CookieUtil {
  readCookies(): ICookieSelection {
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

    if (encrCookieSelections !== '') {
      const cookieSelections = AES.decrypt(encrCookieSelections, KEY).toString(
        enc.Utf8
      );
      cookieObject = JSON.parse(cookieSelections);
    }

    // creating the consent object
    return cookieObject;
  }

  writeCookies(cookieObject: ICookieSelection) {
    const strCookieObj = JSON.stringify(cookieObject);
    if (strCookieObj !== "")
      document.cookie = `selection=${AES.encrypt(strCookieObj, KEY)}`;
  }
}

export default CookieUtil;
