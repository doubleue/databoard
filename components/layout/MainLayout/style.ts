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

export { Body, TitleWrapper, TitleText, SideBarWrapper, DashboardWrapper };
