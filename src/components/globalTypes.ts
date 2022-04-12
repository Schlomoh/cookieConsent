import { IButtonStyle, ITextProps, TBackgroundColor } from "./styledComponents";

export interface ICookieObject {
  [key: string]: boolean;
}

export interface IButtonTexts {
  acceptButtonText?: string;
  declineButtonText?: string;
  managementButtonText?: string;
}

export interface ICookieConsentProps
  extends ITextProps,
    IButtonTexts,
    IButtonStyle {
  onAccept?: (arg0?: ICookieObject) => void;
  onDecline?: () => void;
  infoContent?: JSX.Element;
  enableManagement?: boolean;
  cookieCategories?: string[];
  managementContent?: JSX.Element;
  accentColor?: TBackgroundColor;
  containerStyle?: React.CSSProperties;
}
