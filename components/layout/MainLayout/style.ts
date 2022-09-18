import styled from "styled-components";

const Body = styled.div``;

const TitleWrapper = styled.div`
  margin: 0px 0px 24px 0px;
`;

const TitleText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

export { Body, TitleWrapper, TitleText };
