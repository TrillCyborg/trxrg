import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import ReactGA from 'react-ga'
import { ThemeProvider, Styled } from 'theme-ui'
import theme from '../theme'
import { SITE_METADATA } from '../consts'

// trigger deploy

const metaTags = [
  {
    name: `description`,
    content: SITE_METADATA.description,
  },
  {
    property: `og:title`,
    content: SITE_METADATA.title,
  },
  {
    property: `og:description`,
    content: SITE_METADATA.description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: SITE_METADATA.author,
  },
  {
    name: `twitter:title`,
    content: SITE_METADATA.title,
  },
  {
    name: `twitter:description`,
    content: SITE_METADATA.description,
  },
]

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  componentDidMount() {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_KEY, {
      // debug: process.env.NODE_ENV === 'development'
    })
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          {/* <link href="https://fonts.googleapis.com/css?family=Maven+Pro|Roboto" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css?family=Fira+Mono:400|Maven+Pro:400|Anonymous+Pro:400" rel="stylesheet" />
          <link href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet" integrity="sha384-TXfwrfuHVznxCssTxWoPZjhcss/hp38gEOH8UPZG/JcXonvBQ6SlsIF49wUzsGno" crossOrigin="anonymous" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          {metaTags.map(mt => <meta key={mt.name} {...mt} />)}
        </Head>
        <Container>
          <ThemeProvider theme={theme}>
            <Styled.root>
              <Component {...pageProps} />
            </Styled.root>
          </ThemeProvider>
        </Container>
      </>
    );
  }
}

export default MyApp;