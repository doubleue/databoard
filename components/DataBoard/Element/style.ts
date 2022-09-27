import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.card1};
  height: 80px;
  user-select: none;
  margin: 0 0 8px 0px;
`;

export { Wrapper };
