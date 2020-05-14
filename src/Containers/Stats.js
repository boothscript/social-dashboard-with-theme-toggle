import React from "react"
import styled from "styled-components"

import StatCard from "../Components/StatCard"
import {Grid} from "./Grid.styled"

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