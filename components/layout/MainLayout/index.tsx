import Head from "next/head";
import { ReactNode } from "react";
import {
  Body,
  DashboardWrapper,
  LogoText,
  LogoWrapper,
  SideBarWrapper,
  SLogo,
  TitleText,
  TitleWrapper,
} from "./style";

import Logo from "../../../icons/Logo.svg";
import dynamic from "next/dynamic";
import Link from "next/link";

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
  return (
    <>
      <Head>
        <title>{`${seoTitle} | DataBoard`}</title>
      </Head>
      <Body>
        <Link href={"/"}>
          <LogoWrapper>
            <SLogo>
              <Logo />
            </SLogo>
            <LogoText>DataBoard</LogoText>
          </LogoWrapper>
        </Link>
        <SideBarWrapper>
          <SideMenu />
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
