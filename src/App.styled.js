import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) max(325px) minmax(1em, 1fr);
  background: ${(props) => props.theme.background};

  @media (min-width: ${(props) => props.theme.tablet}) {
    grid-template-columns: minmax(1em, 1fr) max(500px) minmax(1em, 1fr);
  }
  @media (min-width: ${(props) => props.theme.desktop}) {
    grid-template-columns: minmax(1em, 1fr) max(1000px) minmax(1em, 1fr);
  }
`;
