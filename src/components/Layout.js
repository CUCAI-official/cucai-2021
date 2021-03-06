import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";

import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import media from "../styles/media";

const MainContent = styled.section`
  margin: 0 auto;
  ${media.tablet`
        /* max-width: 90%; */

    `}
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet title={title} defaultTitle={title} titleTemplate={`${title} | %s`}>
        <html lang="en" />
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <GlobalStyle />

      <ParallaxProvider>
        <Navbar />
        <MainContent>
          <main>{children}</main>
        </MainContent>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default TemplateWrapper;
