import styled from "styled-components";

type TCss = React.CSSProperties;

export type TBackgroundColor = TCss["backgroundColor"];
type TColor = TCss["color"];
type TFlexDirection = TCss["flexDirection"];
type TJustify = TCss["justifyContent"];
type TAlign = TCss["alignItems"];

interface IFlexDivProps {
  flexDirection?: TFlexDirection;
  justify?: TJustify;
  align?: TAlign;
}

interface IBaseButtonProps {
  backgroundColor?: TBackgroundColor;
  small?: boolean;
}

export interface IButtonStyle {
  primaryButtonStyle?: TCss;
  secondaryButtonStyle?: TCss;
}

export interface ITextProps {
  headingColor?: TColor;
  paragraphColor?: TColor;
}

export interface IAnimatedContainerProps {
  show: boolean;
}

const insertHover = (css: string) => `
    @media (hover: hover) {
            :hover {
                ${css}
            }
        }
    `;

export const FlexDiv = styled.div<IFlexDivProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;

export const Padding = styled.div`
  padding: 30px;
`;

export const Container = styled(Padding)`
  max-width: 500px;
  margin: 30px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
`;

export const Banner = styled(Container)<IAnimatedContainerProps>`
  max-width: 100vw;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.2);
  transform: ${(props) =>
    props.show ? "translateY(0px)" : "translateY(500px)"};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: transform 0.4s ease-in-out, visibility 0.3s;
`;

export const BaseButton = styled.button<IBaseButtonProps>`
  --background-color: ${(props) => props.backgroundColor};
  min-width: ${(props) => (props.small ? "80px" : "100%")};
  min-height: 40px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  margin: ${(props) => (props.small ? "15px 0 0 15px" : "15px 0 0")};
  background-color: ${(props) =>
    props.backgroundColor ? "var(--background-color)" : "#aaa"};
  ${insertHover("filter: brightness(115%)")}
`;

export const TextWrapper = styled.span<ITextProps>`
  h3 {
    color: ${(props) => (props.headingColor ? props.headingColor : "black")};
  }

  p {
    color: ${(props) => (props.paragraphColor ? props.paragraphColor : "grey")};
  }
`;
