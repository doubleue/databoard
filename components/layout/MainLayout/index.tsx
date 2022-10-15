import Head from "next/head";
import { ReactNode, useState } from "react";
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
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "../../Button";
import { useRecoilState } from "recoil";
import { isOpenSideMenuState } from "../../../recoil/isOpenSideMenu";

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
  const [isOpen] = useRecoilState(isOpenSideMenuState);
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
        <EmptySideBarSpace isOpen={isOpen} />
        <SideBarWrapper isOpen={isOpen}>
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
