import { createGlobalStyle } from 'styled-components';
import { AlurakutStyles } from '../lib/AlurakutCommons';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  body {
    font-family: 'Rubik', sans-serif;

    background-color: #212121;
    background-image: url('https://data.whicdn.com/images/290733198/original.gif');
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  ${AlurakutStyles}
`

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}