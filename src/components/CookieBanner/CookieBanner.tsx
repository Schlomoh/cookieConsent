import View from "../View";
import { TextWrapper, Banner, Padding } from "../styledComponents";
import { useShowCookieConsent } from "../../util/useShowCC";

import { ICookieConsentProps } from "../globalTypes";

const CookieBanner = (props: ICookieConsentProps) => {
  const { headingColor, paragraphColor, containerStyle } = props;

  const [show, setShow] = useShowCookieConsent();

  return (
    <Banner style={containerStyle} show={show}>
      <Padding>
        <TextWrapper
          headingColor={headingColor}
          paragraphColor={paragraphColor}
        >
          <View {...props} setShow={setShow} type="banner" />
        </TextWrapper>
      </Padding>
    </Banner>
  );
};

export default CookieBanner;
