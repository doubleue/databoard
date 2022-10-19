import { ReactNode } from "react";

import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

import {
  Body,
  DashboardWrapper,
  EmptySideBarSpace,
  Header,
  LogoText,
  LogoWrapper,
  SideBarWrapper,
  SideMenuWrapper,
  SLogo,
  TitleText,
  TitleWrapper,
} from "./style";

import Logo from "../../../icons/Logo.svg";

import useMenuOpen from "../../../hooks/useMenuOpen";

const SideMenu = dynamic(() => import("../../SideMenu"), { ssr: false });

interface MainLayoutProps {
  title?: string;
  children: ReactNode;
  seoTitle?: string;
}

export default function MainLayout({
  title,
  children,
  seoTitle,
}: MainLayoutProps) {
  const { isMenuOpen } = useMenuOpen();

  return (
    <>
      <Head>
        <title>{`${seoTitle} | DataBoard`}</title>
      </Head>
      <Header>
        <Link href={"/"}>
          <LogoWrapper>
            <SLogo>
              <Logo />
            </SLogo>
            <LogoText>DataBoard</LogoText>
          </LogoWrapper>
        </Link>
      </Header>
      <Body>
        <EmptySideBarSpace isOpen={isMenuOpen} />
        <SideBarWrapper isOpen={isMenuOpen}>
          <SideMenuWrapper>
            <SideMenu />
          </SideMenuWrapper>
        </SideBarWrapper>
        <DashboardWrapper>
          {title ? (
            <TitleWrapper>
              <TitleText>{title}</TitleText>
            </TitleWrapper>
          ) : null}
          {children}
        </DashboardWrapper>
      </Body>
    </>
  );
}
