import React from "react"

import Delta from "./Delta"
import statHelper from "../helpers/statHelper"

import {Grid, Text, Icon, Metric, DeltaWrapper} from "./StatCard.styled"

function StatCard({statName, social, value, delta}){

    return(
        <Grid>
            <Text>{statName}</Text>
            <Icon src={`images/icon-${social}.svg`} alt=""/>
            <Metric >{statHelper(value)}</Metric>
            <DeltaWrapper>
                <Delta delta={delta} suffix="%" />
            </DeltaWrapper>
        </Grid>
    )
}

export default StatCard