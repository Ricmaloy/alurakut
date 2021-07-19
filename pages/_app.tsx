import { ThemeProvider } from "styled-components";
import { CommunitiesProvider } from "../src/contexts/ComunityContext";
import { GlobalStyle, theme } from "../src/styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CommunitiesProvider>
        <ToastContainer />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CommunitiesProvider>
    </>
  );
}

// https://data.whicdn.com/images/290733198/original.gif
// #212121