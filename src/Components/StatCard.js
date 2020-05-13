import React from "react"
import styled from "styled-components"

import Delta from "./Delta"
import statHelper from "../helpers/statHelper"

const Grid = styled.div`
    background: ${props => props.theme.cardBg};
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    padding: 1.3em 1.7em;
    border-radius: 6px;
    height: 100px;

`
const Text = styled.p`
    font-weight: 700;
    font-size: .9em;
    color: ${props => props.theme.textLight};
    margin-top: auto;
    margin-bottom: 16px;


`
const Icon = styled.img`
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 16px;
`

const Metric = styled.p`
    margin-bottom: 0;
    margin-top: auto;
    font-size: 2.25rem;
    font-weight: 700;
    color: ${props => props.theme.textDark};
    line-height: 1;
`

const DeltaWrapper = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    align-items: center;
    

`

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