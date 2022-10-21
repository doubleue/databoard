import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 12px 16px 24px 16px;
  background-color: ${({ theme }) => theme.color.background.card1};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};

  border: 1px solid ${({ theme }) => theme.color.border.main};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 6px;
`;

const MenuOpenButtonWrapper = styled.div<{ isOpen: boolean }>`
  transition: 0.2s;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(-180deg);
        `}
`;

export { Wrapper, ButtonWrapper, MenuOpenButtonWrapper };
