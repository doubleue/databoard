import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;

  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.card.xs};
  background-color: ${({ theme }) => theme.color.background.card1};

  @media only screen and (max-width: calc(400px + 2rem)) {
    min-width: 0px;
    max-width: calc(100vw - 2rem);
  }
`;

const MessageWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  overflow-wrap: break-word;
`;

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.button.sm};
  flex-grow: 1;
  :hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled(Button)`
  color: white;
  background-color: ${({ theme }) => theme.color.signature.main};
`;

const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.color.signature.main};
  /* background-color: ${({ theme }) => theme.color.signature.main}; */
`;

export { MessageWrapper, Wrapper, ButtonWrapper, ConfirmButton, CancelButton };
