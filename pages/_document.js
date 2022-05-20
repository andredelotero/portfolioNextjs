import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/fonts/montserrat-v24-latin-300.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/montserrat-v24-latin-regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/montserrat-v24-latin-500.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/montserrat-v24-latin-700.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
