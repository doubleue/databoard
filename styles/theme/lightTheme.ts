import { DefaultTheme } from "styled-components";
import commonTheme from "./commonTheme";

const lightTheme: DefaultTheme = {
  ...commonTheme,
  color: {
    signature: {
      main: "#0075F4",
      error: "#D84E5F",
    },
    font: {
      main: "#2D2F36",
      sub: "#424854",
    },
    background: {
      main: "#F1F3F5",
      card1: "#FFFEFE",
      card2: "#F6F6F6",
    },
    icon: {
      active: "#2D2F36",
      inactive: "#B0B7C0",
    },
    button: {
      main: "#F1F2F3",
    },
    border: {
      main: "rgba(27,31,36,0.15)",
    },
  },
};

export default lightTheme;
