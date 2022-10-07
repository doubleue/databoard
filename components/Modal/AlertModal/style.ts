import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;

  @media only screen and (max-width: 768px) {
    min-width: 0px;
    max-width: calc(100vw - 40px - 2rem);
  }
`;

const MessageWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  overflow-wrap: break-word;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.button.sm};
  background-color: ${({ theme }) => theme.color.signature.main};
  :hover {
    opacity: 0.8;
  }
`;

export { Button, MessageWrapper, Wrapper };
