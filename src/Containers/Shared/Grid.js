import styled from "styled-components"

export  const Grid = styled.div`
grid-column: 2/-2;
display: grid;
max-width: 1200px;
grid-gap: 20px;
margin-bottom:3em;

@media (min-width: ${props => props.theme.tablet}){
    grid-template-columns: repeat(2, 1fr)
}

@media (min-width: ${props => props.theme.desktop}){
    grid-template-columns: repeat(4, 1fr)
}
`