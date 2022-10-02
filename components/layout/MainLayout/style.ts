import styled from "styled-components";

const Body = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas: "sidebar main";
  grid-template-columns: minmax(0, 240px) minmax(0, 2fr);
  margin: 16px;
`;

const TitleWrapper = styled.div`
  margin: 16px 0px 16px 8px;
`;

const TitleText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

const SideBarWrapper = styled.nav`
  grid-area: sidebar;
  display: flex;
  overflow: auto;
  position: sticky;
  flex-direction: column;
  max-height: var(--max-height);
  top: var(--offset);
  width: 100%;
  --offset: 0rem;
  --max-height: calc(100vh - var(--offset));
`;

const DashboardWrapper = styled.main`
  grid-area: main;
`;

const LogoWrapper = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
`;
const SLogo = styled.div`
  fill: ${({ theme }) => theme.color.icon.inactive};
  display: inline-block;
  svg {
    height: 26px;
    width: 26px;
  }
`;
const LogoText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.icon.inactive};
  font-weight: bold;
`;

export {
  Body,
  TitleWrapper,
  TitleText,
  SideBarWrapper,
  DashboardWrapper,
  LogoWrapper,
  SLogo,
  LogoText,
};
