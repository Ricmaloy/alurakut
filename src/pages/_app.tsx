import { ThemeProvider } from "styled-components";
import { CommunitiesProvider } from "../contexts/ComunityContext";
import { GlobalStyle, theme } from "../styles/GlobalStyles";
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
