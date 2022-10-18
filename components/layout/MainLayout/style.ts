import styled, { css } from "styled-components";

const Header = styled.div`
  margin: 16px;
  display: grid;
  column-gap: 1rem;
  grid-template-areas: "logo header";
`;

const Body = styled.div`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: min-content minmax(0, 2fr);
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

const SideMenuWrapper = styled.div`
  width: 240px;
  position: sticky;
  height: auto;
  top: 1rem;
`;

const EmptySideBarSpace = styled.div<{ isOpen: boolean }>`
  grid-area: sidebar;
  transition: 0.3s;
  ${(props) => {
    if (props.isOpen) {
      return css`
        width: 240px;
        margin-right: 1rem;
      `;
    } else {
      return css`
        width: 0px;
        margin-right: 0;
      `;
    }
  }}
`;

const SideBarWrapper = styled.nav<{ isOpen: boolean }>`
  grid-area: sidebar;
  flex-direction: column;
  z-index: 90;
  display: flex;
  position: absolute;
  height: 100%;
  transition: 0.3s;
  ${(props) => {
    if (props.isOpen) {
      return css`
        left: 0px;
      `;
    } else {
      return css`
        left: -240px;
        :hover {
          left: -1rem;
          padding-left: 1rem;
        }
      `;
    }
  }}
`;

const DashboardWrapper = styled.main`
  grid-area: main;
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
  fill: ${({ theme }) => theme.color.font.sub};
  display: inline-block;
  svg {
    height: 26px;
    width: 26px;
  }
`;
const LogoText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.icon.inactive};
  color: ${({ theme }) => theme.color.font.sub};
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
  EmptySideBarSpace,
  Header,
};
