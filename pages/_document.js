import { ServerStyleSheets } from '@material-ui/core/styles';
import React from 'react';

import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document{
  render() {
    return (
      <Html lang="en">
        <Head>
         <link rel="stylesheet" href="https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;"/>
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>

    )
  }

}
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
  return originalRenderPage ({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
