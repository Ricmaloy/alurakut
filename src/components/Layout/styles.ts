import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      'header          header        header'
      'profileArea welcomeArea profileRelationsArea';

    grid-template-columns: 160px 1fr 310px;
  }
`;
