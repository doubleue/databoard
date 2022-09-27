import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.card1};
  color: ${({ theme }) => theme.color.font.sub};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};
  padding: 20px 20px;
  height: 80px;
  user-select: none;
  margin: 0 0 8px 0px;
`;

export { Wrapper };
