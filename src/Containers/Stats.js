import React from "react"
import styled from "styled-components"

import StatCard from "../Components/StatCard"

const Grid = styled.div`
grid-column: 2/-2;
display: grid;
max-width: 1200px;
grid-gap: 20px;
margin-bottom: 3em;

@media (min-width: 500px){
    grid-template-columns: repeat(2, 1fr)
}
@media (min-width: 1000px){
    grid-template-columns: repeat(4, 1fr)
}
`
const Header = styled.h3`
color: ${props => props.theme.textLight};
font-weight: 700;
border-bottom: 0;
grid-column: 1/-1;
`

function Stats({cardData}){

    return (

        
        <Grid>
        <Header> Overview - Today</Header>
            {cardData.map((cardObj) => <StatCard key={cardObj.value} social={cardObj.social} statName={cardObj.statName} value={cardObj.value} delta={cardObj.delta} /> )}
        </Grid>

    )
}

export default Stats