import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 16px 0px 24px 16px;
  background-color: ${({ theme }) => theme.color.background.card1};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};

  border: 1px solid ${({ theme }) => theme.color.border.main};
  max-height: calc(100vh - 2rem);
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  max-height: calc(100vh / 4 * 3);
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

const HeaderWrapper = styled.div`
  margin-right: 16px;
`;
const MenuWrapper = styled.div`
  overflow-y: scroll;
  padding-right: 16px;
`;

export {
  Wrapper,
  ButtonWrapper,
  MenuOpenButtonWrapper,
  HeaderWrapper,
  MenuWrapper,
};
