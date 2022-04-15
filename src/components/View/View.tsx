import { Dispatch, SetStateAction, useState } from "react";
import { BaseButton, FlexDiv } from "../styledComponents";
import ButtonGroup, { IButtonGroupProps } from "../ButtonGroup";
import {
  defaultAcceptBtnText,
  defaultManageBtnText,
  defaultAccentColor,
  defaultInfoContent,
  defaultManageContent,
  defaultDeclineBtnText,
} from "../defaultContent";
import CookieSelection from "../CookieSelection";
import CookieUtil from "../../util/cookieUtil";
import { ICookieConsentProps, ICookieObject } from "../globalTypes";

interface IViewProps extends ICookieConsentProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  type: "banner" | "modal";
}

type TButtonClickCallback = (() => void) | undefined;

const View = (props: IViewProps) => {
  //states
  const [showMangeView, setShowManageView] = useState(false),
    [selection, setSelection] = useState<string[]>([]),
    // gettinh the states set method from the parent passed down as prop
    setShow = props.setShow,
    // property constants
    {
      onAccept,
      onDecline,
      type,
      enableManagement,
      cookieCategories,
      primaryButtonStyle,
      secondaryButtonStyle,
    } = props;
  // properties that get set with a default when not set by the user
  let { accentColor, infoContent, managementContent } = props;
  let { managementButtonText, acceptButtonText, declineButtonText } = props;

  // setting defaults
  if (!acceptButtonText) acceptButtonText = defaultAcceptBtnText;
  if (!declineButtonText) declineButtonText = defaultDeclineBtnText;
  if (!managementButtonText) managementButtonText = defaultManageBtnText;
  if (!accentColor) accentColor = defaultAccentColor;
  if (!infoContent) infoContent = defaultInfoContent;
  if (!managementContent) managementContent = defaultManageContent;
  // flex direction for the button group
  const direction = type === "banner" ? "row" : "column";

  /////// callbacks
  // switching views
  function toggleManageView() {
    setShowManageView(!showMangeView);
  }

  // base button callback for hiding the cookie consent on submit
  function buttonClick(callback: TButtonClickCallback) {
    setShow(false);
    if (callback) callback();
  }

  // either accept all cookies or just the selected in case the
  // 'enableManagement' prop is set
  function accept(all?: boolean) {
    let cookieObj: ICookieObject;

    //  when an array of cookie categories was given
    if (all && cookieCategories) {
      cookieObj = CookieUtil.createCookieObj(
        cookieCategories,
        cookieCategories
      );
      // when no array of cookie categories was given
    } else if (all && !cookieCategories) {
      cookieObj = CookieUtil.createCookieObj(["all"], ["all"]);
      // when a selection of cookie categories was submitted
    } else cookieObj = CookieUtil.createCookieObj(selection, cookieCategories);

    // writing cookies and calling the onAccept callback
    CookieUtil.writeCookies(cookieObj);
    buttonClick(() => (onAccept ? onAccept(cookieObj) : () => {}));
  }

  // wither a cookie category array was given or not
  // depending it sets a cookie with either '"all": false'
  // or the specific categories set to false
  function decline() {
    if (cookieCategories) {
      CookieUtil.writeCookies(CookieUtil.createCookieObj([], cookieCategories));
    } else {
      CookieUtil.writeCookies(CookieUtil.createCookieObj([], ["all"]));
    }
    buttonClick(onDecline);
  }

  const BaseView = ({ children }: { children: JSX.Element | undefined }) => {
    // an object of props to be passed into the button group component
    // these establish the look and arragement of the buttons and provide the callbacks
    const buttonGroupProps = {
      toggleManageViewCallback: toggleManageView,
      showManagementView: showMangeView,
      primaryButtonStyle: primaryButtonStyle,
      secondaryButtonStyle: secondaryButtonStyle,
      enableManagement: enableManagement,
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

    return (
      <>
        {children}
        <ButtonGroup {...buttonGroupProps} />
      </>
    );
  };

  // the view one is greeted with
  const InfoView = () => <BaseView>{infoContent}</BaseView>;

  // the view available when having set the 'enableManagement' prop
  // for selecting which cookie categories the user agrees with
  const ManagementView = () => (
    <BaseView>
      <>
        <FlexDiv align={"end"}>
          <BaseButton
            style={{ ...props.secondaryButtonStyle, margin: 0 }}
            small
            onClick={toggleManageView}
          >
            Back
          </BaseButton>
        </FlexDiv>
        {managementContent}
        <CookieSelection
          categories={cookieCategories}
          selection={{ get: selection, set: setSelection }}
        />
      </>
    </BaseView>
  );

  return showMangeView ? <ManagementView /> : <InfoView />;
};

export default View;
