import { BaseButton, FlexDiv } from "./styledComponents";

const ButtonGroup = (props: IButtonGroupProps) => {
  const {
    callbacks,
    toggleManageViewCallback,
    showManagementView,
    primaryButtonStyle,
    secondaryButtonStyle,
    enableManagement,
    accentColor,
    direction,
  } = props;

  const { acceptButtonText, declineButtonText, managementButtonText } = props;

  const DynPrimButton = ({ children, onClick }: IDynButtonProps) => (
    <BaseButton
      onClick={onClick}
      style={primaryButtonStyle}
      small={direction === "row"}
      backgroundColor={accentColor}
    >
      {children}
    </BaseButton>
  );
  const DynSecButton = ({ children, onClick }: IDynButtonProps) => (
    <BaseButton
      onClick={onClick}
      style={secondaryButtonStyle}
      small={direction === "row"}
    >
      {children}
    </BaseButton>
  );

  const ManagementButton = () =>
    enableManagement ? (
      <DynSecButton onClick={toggleManageViewCallback}>
        {managementButtonText}
      </DynSecButton>
    ) : (
      <></>
    );

  const InfoViewButtonGroup = () => (
    <FlexDiv flexDirection={direction} justify={"end"}>
      <DynSecButton onClick={callbacks.decline}>
        {declineButtonText}
      </DynSecButton>
      <ManagementButton />
      <DynPrimButton onClick={() => callbacks.accept(true)}>
        {acceptButtonText}
      </DynPrimButton>
    </FlexDiv>
  );

  const ManageViewButtonGroup = () => (
    <FlexDiv flexDirection={direction} justify={"end"}>
      <DynSecButton onClick={callbacks.decline}>
        {declineButtonText}
      </DynSecButton>
      <DynSecButton onClick={() => callbacks.accept(false)}>
        Accept selected
      </DynSecButton>
      <DynPrimButton onClick={() => callbacks.accept(true)}>
        Accept All
      </DynPrimButton>
    </FlexDiv>
  );

  return showManagementView ? (
    <ManageViewButtonGroup />
  ) : (
    <InfoViewButtonGroup />
  );
};

export default ButtonGroup;
