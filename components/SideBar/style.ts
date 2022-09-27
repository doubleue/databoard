import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.color.background.card1};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};
`;

export { Wrapper };
