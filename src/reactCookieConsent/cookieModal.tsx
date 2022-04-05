import styled from "styled-components";
import { View } from "./global";
import { TextWrapper, FlexDiv, Container } from "./components/styledComponents";
import { useShowCookieConsent } from "./util/useShowCC";

const Backdrop = styled(FlexDiv)<IAnimatedContainerProps>`
  z-index: 500;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
`;

const CookieModal = (props: ICookieConsentProps) => {
  const { headingColor, paragraphColor, containerStyle } = props;

  const [show, setShow] = useShowCookieConsent()

  return (
    <Backdrop show={show}>
      <Container style={containerStyle}>
        <TextWrapper
          headingColor={headingColor}
          paragraphColor={paragraphColor}
        >
          <View {...props} setShow={setShow} type='modal' />
        </TextWrapper>
      </Container>
    </Backdrop>
  );
};

export default CookieModal;
