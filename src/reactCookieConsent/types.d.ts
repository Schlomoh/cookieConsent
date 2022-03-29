type TBackgroundColor = React.CSSProperties["backgroundColor"];
interface ICookieConsentProps {
  type: "modal" | "banner";
  onAccept?: () => void;
  acceptButtonText?: string;
  onDecline?: () => void;
  declineButtonText?: string;
  infoContent?: JSX.Element;
  managementContent?: JSX.Element;
  enableManagement?: boolean;
  managementButtonText?: string;
  accentColor?: TBackgroundColor;
  containerStyle?: React.CSSProperties;
  primaryButtonStyle?: React.CSSProperties;
  secondaryButtonStyle?: React.CSSProperties;
}

interface IBaseButtonProps {
  backgroundColor?: TBackgroundColor;
}

type TButtonClickCallback = (() => void) | undefined;

type TFlexDirection = React.CSSProperties["flexDirection"];
type TJustify = React.CSSProperties["justifyContent"];
type TAlign = React.CSSProperties["alignItems"];

interface IFlexDivProps {
  flexDirection?: TFlexDirection;
  justify?: TJustify;
  align?: TAlign;
}

interface IBackdropProps {
  show: boolean;
}
