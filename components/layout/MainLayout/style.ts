import styled from "styled-components";

const Body = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas: "sidebar main";
  grid-template-columns: minmax(0, 240px) minmax(0, 2fr);
`;

const TitleWrapper = styled.div`
  margin: 0px 0px 24px 0px;
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
