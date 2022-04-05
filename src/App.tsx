import { CookieModal, CookieBanner } from "./reactCookieConsent";

const Main = () => {
  const CookieInfoContent = () => (
    <>
      <h3>This site uses Cookies</h3>
      <p>
        To improve the performance and user experience, this site uses cookies
        and shares user data with third-party services.
      </p>
    </>
  );

  const containerStyle = {
    background: "rgb(30,30,30)",
    boxShadow: 'unset'
  } as React.CSSProperties;

  return (
    <main>
      <CookieBanner
        headingColor={"white"}
        containerStyle={containerStyle}
        enableManagement={true}
        infoContent={<CookieInfoContent />}
        onAccept={() => console.log("accepted cookies")}
        onDecline={() => console.log("declined cookies")}
      />
    </main>
  );
};

export default Main;
