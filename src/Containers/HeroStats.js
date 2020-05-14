import React from "react"

import HeroCard from "../Components/HeroCard"
import {Grid} from "./Grid.styled"


function HeroStats({cardData}){

    return (
        <Grid>
            {cardData.map((cardObj) => <HeroCard social={cardObj.social} username={cardObj.username} value={cardObj.value} delta={cardObj.delta} text={cardObj.text}/> )}
        </Grid>
    )
}

export default HeroStats