import styled from 'styled-components';

export const Container = styled.div`
  grid-area: profileArea;
  display: none;

  @media(min-width: 860px) {
    display: block;
  }
`;