import styled, { css } from "styled-components";

const Body = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 0.5rem;
  grid-template-areas:
    "logo header"
    "sidebar main";
  grid-template-columns: minmax(0, 240px) minmax(0, 2fr);
  margin: 16px;
  position: relative;
`;

const TitleWrapper = styled.div`
  margin: 8px 0px 16px 0px;
`;

const TitleText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

const SideMenuWrapper = styled.div<{ isHide: boolean }>`
  ${(props) => {
    if (props.isHide) {
      return css`
        position: sticky;
        height: auto;
        top: 1rem;
      `;
    }
  }}
`;

const SideBarWrapper = styled.nav<{ isHide: boolean }>`
  grid-area: sidebar;
  z-index: 90;
  display: flex;
  flex-direction: column;
  ${(props) => {
    if (props.isHide) {
      return css`
        position: absolute;
        height: 100%;
        width: 240px;
      `;
    } else {
      return css`
        overflow: auto;
        position: sticky;
        height: calc(100vh - 1rem);
        top: 1rem;
        width: 100%;
      `;
    }
  }}
`;

const DashboardWrapper = styled.main<{ isHide: boolean }>`
  ${(props) => {
    if (props.isHide)
      return css`
        grid-column: 1 / 3;
      `;
    else
      return css`
        grid-area: main;
      `;
  }}
`;

const LogoWrapper = styled.div`
  grid-area: logo;
  cursor: pointer;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0px 0px 0px 8px;
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
  SideMenuWrapper,
};
