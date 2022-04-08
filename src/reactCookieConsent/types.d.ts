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
  onAccept?: (ICookieObject) => void;
  onDecline?: () => void;
  infoContent?: JSX.Element;
  managementContent?: JSX.Element;
  enableManagement?: boolean;
  accentColor?: TBackgroundColor;
  containerStyle?: React.CSSProperties;
  cookieCategories?: string[];
}

interface IViewProps extends ICookieConsentProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  type: "banner" | "modal";
}

interface IBaseButtonProps {
  backgroundColor?: TBackgroundColor;
  small?: boolean;
}

interface IDynButtonProps {
  children: any;
  onClick: () => void;
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

interface ISelectionProp {
  selection: { get: string[]; set: Dispatch<SetStateAction<string[]>> };
}

interface ISelectorCheckboxProps extends ISelectionProp {
  category: string;
}
interface ICookieSelectionProps extends ISelectionProp {
  categories?: string[];
}

interface ICookieObject {
  [key: string]: boolean;
}

interface IButtonGroupProps extends IButtonTexts, IButtonStyle {
  callbacks: {
    accept: (all?: boolean) => void;
    decline: () => void;
  };
  toggleManageViewCallback: () => void;
  showManagementView: boolean;
  enableManagement?: boolean;
  accentColor?: TBackgroundColor;
  direction: "column" | "row";
}
