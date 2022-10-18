import { DefaultTheme } from "styled-components";
import commonTheme from "./commonTheme";

const darkTheme: DefaultTheme = {
  ...commonTheme,
  color: {
    signature: {
      main: "#3283F7",
      error: "#F86A75",
    },
    font: {
      main: "#FDFDFE",
      sub: "#828286",
    },
    background: {
      main: "#101012",
      card1: "#17171C",
      card2: "#202029",
    },
    icon: {
      active: "#FDFDFE",
      inactive: "#62616D",
    },
    button: {
      main: "#2C2C35",
    },
    border: {
      main: "rgba(240,246,252,0.1)",
    },
  },
};

export default darkTheme;
