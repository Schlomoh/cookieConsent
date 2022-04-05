import { useState } from "react";
import { BaseButton, FlexDiv } from "./components/styledComponents";
import {
  defaultAcceptBtnText,
  defaultManageBtnText,
  defaultAccentColor,
  defaultInfoContent,
  defaultManageContent,
  defaultDeclineBtnText,
} from "./components/defaultContent";
const ButtonGroup = (props: IButtonGroupProps) => {
  const {
    callbacks,
    toggleManageViewCallback,
    primaryButtonStyle,
    secondaryButtonStyle,
    enableManagement,
    accentColor,
    direction,
  } = props;

  const { acceptButtonText, declineButtonText, managementButtonText } = props;

  const ManagementButton = () =>
    enableManagement ? (
      <BaseButton
        onClick={toggleManageViewCallback}
        style={secondaryButtonStyle}
        small={direction === "row"}
      >
        {managementButtonText}
      </BaseButton>
    ) : (
      <>{null}</>
    );

  return (
    <FlexDiv flexDirection={direction} justify={"end"}>
      <BaseButton
        small={direction === "row"}
        onClick={callbacks.decline}
        style={secondaryButtonStyle}
      >
        {declineButtonText}
      </BaseButton>
      <ManagementButton />
      <BaseButton
        small={direction === "row"}
        onClick={callbacks.accept}
        style={primaryButtonStyle}
        backgroundColor={accentColor}
      >
        {acceptButtonText}
      </BaseButton>
    </FlexDiv>
  );
};

export const View = (props: IViewProps) => {
  const [showMangeView, setShowManageView] = useState(false);
  const setShow = props.setShow;

  const { onAccept, onDecline, type } = props;

  let { accentColor, infoContent, managementContent } = props;
  let { managementButtonText, acceptButtonText, declineButtonText } = props;

  function toggleManageView() {
    setShowManageView(!showMangeView);
  }

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

  if (!acceptButtonText) acceptButtonText = defaultAcceptBtnText;
  if (!declineButtonText) declineButtonText = defaultDeclineBtnText;
  if (!managementButtonText) managementButtonText = defaultManageBtnText;
  if (!accentColor) accentColor = defaultAccentColor;
  if (!infoContent) infoContent = defaultInfoContent;
  if (!managementContent) managementContent = defaultManageContent;

  const direction = type === "banner" ? "row" : "column";

  const buttonGroupProps = {
    toggleManageViewCallback: toggleManageView,
    primaryButtonStyle: props.primaryButtonStyle,
    secondaryButtonStyle: props.secondaryButtonStyle,
    enableManagement: props.enableManagement,
    managementButtonText: managementButtonText,
    acceptButtonText: acceptButtonText,
    declineButtonText: declineButtonText,
    accentColor: accentColor,
    direction: direction,
    callbacks: {
      accept: accept,
      decline: decline,
    },
  } as IButtonGroupProps;

  const BaseView = ({ children }: { children: JSX.Element | undefined }) => (
    <>
      {children}
      <ButtonGroup {...buttonGroupProps} />
    </>
  );

  const InfoView = () => <BaseView>{infoContent}</BaseView>;

  const ManagementView = () => (
    <BaseView>
      <>
        <BaseButton onClick={toggleManageView}>Back</BaseButton>
        {managementContent}
      </>
    </BaseView>
  );

  return showMangeView ? <ManagementView /> : <InfoView />;
};
