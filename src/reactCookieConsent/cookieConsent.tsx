import styled from "styled-components";
import React, { useEffect, useState } from "react";

// types
// import { ICookieConsentProps } from "CookieConsent.d";

const FlexDiv = styled.div<IFlexDivProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;

const Container = styled.div`
  width: 500px;
  /* height: 500px; */
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 30px;
  font-family: sans-serif;
`;

const Backdrop = styled(FlexDiv)<IBackdropProps>`
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

const BaseButton = styled.button<IBaseButtonProps>`
  min-width: 100%;
  min-height: 40px;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ccc"};
`;

const CookieConsent = (props: ICookieConsentProps) => {
  const {
    containerStyle,
    primaryButtonStyle,
    secondaryButtonStyle,
    enableManagement,
    onAccept,
    onDecline,
  } = props;

  let { accentColor, managementButtonText, infoContent, managementContent } =
    props;

  if (!accentColor) accentColor = "coral";
  if (!managementButtonText) managementButtonText = "Manage cookies";

  if (!infoContent)
    infoContent = (
      <>
        <h3>This site uses Cookies</h3>
        <p>
          To improve the performance and user experience, this site uses cookies
          and shares user data with third-party services.
        </p>
      </>
    );

  if (!managementContent)
    managementContent = (
      <>
        <h3>Manage your cookie settings</h3>
        <p>
          You can toggle cookie usage for analytical data, advertisement and
          other third-party services, offered to improve the user experience.
        </p>
      </>
    );
  const [show, setShow] = useState(false);
  const [showMangeView, setShowManageView] = useState(false);

  // state for having found cookies present or not
  const [test, _] = useState(true);

  useEffect(() => {
    // if (onAccept) onAccept();
    // if (onDecline) onDecline();
    if (test) {
      _(false);
      setShow(true);
    }
  });

  function buttonClick(callback: TButtonClickCallback) {
    setShow(false);
    if (callback) callback();
  }

  function accept() {
    buttonClick(onAccept);
  }

  function decline() {
    buttonClick(onDecline);
  }

  function toggleManageView() {
    setShowManageView(!showMangeView);
  }

  const ButtonGroup = ({ showManageButton }: { showManageButton: boolean }) => {
    const ManagementButton = () =>
      enableManagement && showManageButton ? (
        <BaseButton onClick={toggleManageView} style={primaryButtonStyle}>
          {managementButtonText}
        </BaseButton>
      ) : (
        <>{null}</>
      );

    return (
      <FlexDiv justify={"end"}>
        <BaseButton onClick={decline} style={secondaryButtonStyle}>
          Decline
        </BaseButton>
        <ManagementButton />
        <BaseButton
          onClick={accept}
          style={primaryButtonStyle}
          backgroundColor={accentColor}
        >
          Accept
        </BaseButton>
      </FlexDiv>
    );
  };

  const InfoView = () => {
    return (
      <>
        {infoContent}
        <ButtonGroup showManageButton />
      </>
    );
  };

  const ManagementView = () => {
    return (
      <>
      <BaseButton onClick={toggleManageView}>Back</BaseButton>
        {managementContent}
        <ButtonGroup showManageButton={false} />
      </>
    );
  };

  const View = () => (showMangeView ? <ManagementView /> : <InfoView />);

  return (
    <Backdrop show={show}>
      <Container style={containerStyle}>
        <View />
      </Container>
    </Backdrop>
  );
};

export default CookieConsent;
