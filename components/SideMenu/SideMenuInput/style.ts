import styled from "styled-components";

const TitleInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.base};
  outline: none;
  padding: 14px;
  display: block;
  width: 100%;
  text-align: left;
  /* margin: 6px 0px; */
  background-color: ${({ theme }) => theme.color.background.card2};
  border-radius: ${({ theme }) => theme.borderRadius.button.base};
  border: 1px solid ${({ theme }) => theme.color.border.main};
`;

export { TitleInput };
