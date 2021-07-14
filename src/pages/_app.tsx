import { ThemeProvider } from 'styled-components'
import { CommunitiesProvider } from '../contexts/ComunityContext';
import { GlobalStyle, theme } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
    <CommunitiesProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CommunitiesProvider>
    </>
  )
}
