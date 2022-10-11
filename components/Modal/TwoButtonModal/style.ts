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
  * {
    flex-grow: 1;
  }
`;

export { MessageWrapper, Wrapper, ButtonWrapper };
