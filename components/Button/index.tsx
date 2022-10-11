import { ButtonHTMLAttributes } from "react";
import {
  ButtonWrapper,
  ContentsWrapper,
  IconWrapper,
  TextWrapper,
} from "./style";

export type VariantType = "text" | "contained" | "outlined";
export type ColorType = "success" | "error";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any;
  variant?: VariantType;
  color?: ColorType;
}

export default function Button({
  icon,
  variant = "contained",
  color = "success",
  ...bprops
}: ButtonProps) {
  return (
    <ButtonWrapper {...bprops} variant={variant} color={color}>
      <ContentsWrapper>
        {icon ? <IconWrapper>{icon}</IconWrapper> : null}
        {bprops.children ? <TextWrapper>{bprops.children}</TextWrapper> : null}
      </ContentsWrapper>
    </ButtonWrapper>
  );
}
