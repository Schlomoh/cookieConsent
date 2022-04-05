type TCss = React.CSSProperties;

type TBackgroundColor = Tcss["backgroundColor"];
type TColor = TCss["color"];
type TFlexDirection = TCss["flexDirection"];
type TJustify = TCss["justifyContent"];
type TAlign = TCss["alignItems"];

interface ITextProps {
  headingColor?: TColor;
  paragraphColor?: TColor;
}

interface IButtonTexts {
  acceptButtonText?: string;
  declineButtonText?: string;
  managementButtonText?: string;
}

interface IButtonStyle {
  primaryButtonStyle?: React.CSSProperties;
  secondaryButtonStyle?: React.CSSProperties;
}

interface ICookieConsentProps extends ITextProps, IButtonTexts, IButtonStyle {
  onAccept?: () => void;
  onDecline?: () => void;
  infoContent?: JSX.Element;
  managementContent?: JSX.Element;
  enableManagement?: boolean;
  accentColor?: TBackgroundColor;
  containerStyle?: React.CSSProperties;
}

interface IViewProps extends ICookieConsentProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  type: "banner" | "modal";
}

interface IBaseButtonProps {
  backgroundColor?: TBackgroundColor;
  small?: boolean;
}

type TButtonClickCallback = (() => void) | undefined;

interface IFlexDivProps {
  flexDirection?: TFlexDirection;
  justify?: TJustify;
  align?: TAlign;
}

interface IAnimatedContainerProps {
  show: boolean;
}

interface IButtonGroupProps extends IButtonTexts, IButtonStyle {
  callbacks: {
    accept: () => void;
    decline: () => void;
  };
  toggleManageViewCallback: () => void;
  enableManagement?: boolean;
  accentColor?: TBackgroundColor;
  direction: "column" | "row";
}
