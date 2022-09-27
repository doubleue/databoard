import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
    color: {
      signature: {
        main: string;
      };
      font: {
        main: string;
        sub: string;
      };
      background: {
        main: string;
        card1: string;
        card2: string;
      };
      icon: {
        active: string;
        inactive: string;
      };
      button: {
        main: string;
      };
    };
  }
}
