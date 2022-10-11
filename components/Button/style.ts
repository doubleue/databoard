import styled, { css } from "styled-components";
import { ColorType, VariantType } from ".";

const IconWrapper = styled.a`
  width: ${({ theme }) => theme.fontSize.xs};
  height: ${({ theme }) => theme.fontSize.xs};
`;

const ContentsWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.a`
  height: 14px;
`;

const ButtonWrapper = styled.button<{
  variant?: VariantType;
  color?: ColorType;
}>`
  ${(props) => {
    let signature = props.theme.color.signature.main;
    const color = "white";

    if (props.color === "error") {
      signature = props.theme.color.signature.error;
    }

    if (props.variant === "contained") {
      return css`
        background-color: ${signature};
        a {
          color: ${color};
          fill: ${color};
        }
      `;
    } else if (props.variant === "text") {
      return css`
        background-color: transparent;
        a {
          color: ${signature};
          fill: ${signature};
        }
      `;
    } else if (props.variant === "outlined") {
      return css`
        background-color: transparent;
        border: 2px solid ${signature};
        a {
          color: ${signature};
          fill: ${signature};
        }
      `;
    }
  }};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.button.sm};
  :hover {
    opacity: 0.8;
  }
`;

export { ButtonWrapper, ContentsWrapper, IconWrapper, TextWrapper };
