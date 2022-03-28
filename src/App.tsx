import { CookieConsent } from "./reactCookieConsent";

const Main = () => {
  const CookieInfoContent = () => <p>this site uses Cookies</p>;
  return (
    <main>
      <CookieConsent infoContent={<CookieInfoContent />} type="modal" />
    </main>
  );
};

export default Main;
