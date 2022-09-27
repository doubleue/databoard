import styled from "styled-components";

const Wrapper = styled.button`
  padding: 16px 8px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;

  :hover {
    background-color: ${({ theme }) => theme.color.background.card2};
  }
`;

const Text = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export { Wrapper, Text };
