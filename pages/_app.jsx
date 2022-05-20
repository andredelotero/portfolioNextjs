import { appWithTranslation } from "next-i18next";
import { createGlobalStyle } from "styled-components";
import "./styles.css";
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/montserrat-v24-latin-300.woff') format('woff');
    font-style: normal;
    font-weight: 300;
    font-display: block;
  }
    @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/montserrat-v24-latin-regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: block;
  }
    @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/montserrat-v24-latin-500.woff') format('woff');
    font-style: normal;
    font-weight: 500;
    font-display: block;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/montserrat-v24-latin-700.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: block;
  }

`;

export function reportWebVitals(metric) {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

  if (!url) {
    return;
  }

  const body = JSON.stringify({
    route: window.__NEXT_DATA__.page,
    ...metric,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
};

export default appWithTranslation(MyApp);
