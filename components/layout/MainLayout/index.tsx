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
  const [isHide, setIsHide] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{`${seoTitle} | DataBoard`}</title>
      </Head>
      <Header>
        <Button
          variant="text"
          onClick={() => {
            setIsHide(!isHide);
          }}
        >
          click
        </Button>
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
        <EmptySideBarSpace isHide={isHide} />
        <SideBarWrapper isHide={isHide}>
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
