interface ICookieConsentProps {
  type: "modal" | "banner";
  infoContent: JSX.Element;
  onAccept?: () => void;
  onDecline?: () => void;
  enableCustomization?: boolean;
  acceptButtonText?: string;
  declineButtonText?: string;
  customizeButtonText?: string;
  containerStyle?: React.CSSProperties;
  customizeContent?: JSX.Element;
  primaryButtonStyle?: React.CSSProperties;
  secondaryButtonStyle?: React.CSSProperties;
}
