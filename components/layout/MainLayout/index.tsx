import Head from "next/head";
import { ReactNode } from "react";
import { Body, TitleText, TitleWrapper } from "./style";

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
        {title ? (
          <TitleWrapper>
            <TitleText>{title}</TitleText>
          </TitleWrapper>
        ) : null}
        {children}
      </Body>
    </>
  );
}
