import View from "../View";
import { TextWrapper, Banner } from "../styledComponents";
import { useShowCookieConsent } from "../../util/useShowCC";

import { ICookieConsentProps } from "../globalTypes";

const CookieBanner = (props: ICookieConsentProps) => {
  const { headingColor, paragraphColor, containerStyle } = props;

  const [show, setShow] = useShowCookieConsent();

  return (
    <Banner style={containerStyle} show={show}>

        <TextWrapper
          headingColor={headingColor}
          paragraphColor={paragraphColor}
        >
          <View {...props} setShow={setShow} type="banner" />
        </TextWrapper>

    </Banner>
  );
};

export default CookieBanner;
