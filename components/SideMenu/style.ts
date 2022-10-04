import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px 16px 24px 16px;
  background-color: ${({ theme }) => theme.color.background.card1};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const AddButton = styled.button`
  fill: ${({ theme }) => theme.color.icon.inactive};
  width: 28px;
  height: 28px;
  padding: 4px;
  transition: 0.2s;
  svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    fill: ${({ theme }) => theme.color.signature.main};
    background-color: ${({ theme }) => theme.color.signature.main + "26"};
    border-radius: 4px;
  }
`;

export { Wrapper, ButtonWrapper, AddButton };
