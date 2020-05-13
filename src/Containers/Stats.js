import React from "react"
import styled from "styled-components"

import StatCard from "../Components/StatCard"

const Grid = styled.div`
grid-column: 2/-2;
display: grid;
max-width: 1200px;
grid-gap: 20px;

`
const Header = styled.h3`
color: ${props => props.theme.textLight};
font-weight: 700;
border-bottom: 0;
`

function Stats({cardData}){
    console.log(cardData)
    return (

        
        <Grid>
        <Header> Overview - Today</Header>
            {cardData.map((cardObj) => <StatCard social={cardObj.social} statName={cardObj.statName} value={cardObj.value} delta={cardObj.delta} /> )}
        </Grid>

    )
}

export default Stats