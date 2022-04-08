import { CookieModal, CookieBanner } from "./reactCookieConsent";

const Main = () => {
  const containerStyle = {
    background: "rgb(30,30,30)",
    boxShadow: "unset",
  } as React.CSSProperties;

  function logCookies(cookieObj: ICookieObject) {
    console.log("the cookies selected: ", cookieObj);
  }

  return (
    <main>
      <CookieModal
        // containerStyle={containerStyle}
        enableManagement={true}
        onAccept={(obj) => console.log("Cookies accepted: ", obj)}
        onDecline={() => console.log("declined cookies")}
        cookieCategories={["analytics", "advertisement", "social media"]}
      />
    </main>
  );
};

export default Main;
