import React from "react"
import styled from "styled-components"

import HeroCard from "../Components/HeroCard"
import {Grid} from "./Shared/Grid"


function HeroStats({cardData}){
    console.log(cardData)
    return (
        <Grid>
            {cardData.map((cardObj) => <HeroCard social={cardObj.social} username={cardObj.username} value={cardObj.value} delta={cardObj.delta} text={cardObj.text}/> )}
        </Grid>
    )
}

export default HeroStats