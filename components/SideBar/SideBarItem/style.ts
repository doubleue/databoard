import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;

  :hover {
    background-color: ${({ theme }) => theme.color.background.card2};
    border-radius: ${({ theme }) => theme.borderRadius.button.base};
  }
`;

const Text = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export { Wrapper, Text };
