import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  RightSide: "#F7F8FA",
  LeftSide: "#EFF0F5",
  TextColor: "#121B25",
  Footer: "#F9FAFC",
  RightShadow: "0px 0px 60px rgba(62, 85, 103, 0.1)",
  FooterShadow: "0px 0px 60px rgba(62, 85, 103, 0.1);"
};


export const Main = createGlobalStyle`
    body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}
`;