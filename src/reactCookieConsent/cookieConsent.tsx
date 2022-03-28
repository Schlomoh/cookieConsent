import styled from "styled-components";
import { useEffect } from "react";

// types
// import { ICookieConsentProps } from "CookieConsent.d";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background-color: rgb(200, 200, 200);
  padding: 30px;
  font-family: sans-serif;
`;

const CookieConsent = (props: ICookieConsentProps) => {
  const container = { style: props.containerStyle, content: props.infoContent };
  const { onAccept, onDecline } = props;

  useEffect(() => {
    if (onAccept) onAccept();
    if (onDecline) onDecline();
  });

  return <Container style={container.style}>{container.content}</Container>;
};

export default CookieConsent;
