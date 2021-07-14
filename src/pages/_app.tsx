import { ThemeProvider } from 'styled-components'
import { ComunitiesProvider } from '../contexts/ComunityContext';
import { GlobalStyle, theme } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
    <ComunitiesProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ComunitiesProvider>
    </>
  )
}
