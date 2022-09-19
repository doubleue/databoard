import Head from "next/head";
import { ReactNode } from "react";
import SideBar from "../../SideBar";
import {
  Body,
  DashboardWrapper,
  SideBarWrapper,
  TitleText,
  TitleWrapper,
} from "./style";

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
        <title>{seoTitle} | DataBoard</title>
      </Head>
      <Body>
        <SideBarWrapper>
          <SideBar />
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
