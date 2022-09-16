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
  }
}
