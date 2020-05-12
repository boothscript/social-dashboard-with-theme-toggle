import React from "react"
import styled from "styled-components"

const DeltaText = styled.p`
    font-weight: 700;
    font-size: .85rem;
    color: ${({theme, color}) => theme[color]};
    margin-bottom:0;
    margin-left: .4em;
`



function Delta({delta, suffix}){
    const text = `${Math.abs(delta)} ${suffix}`
    const color = delta > 0 ? "green" : "red"
    return (
    <>
    <img src={`images/icon-arrow-${color}.svg`} />
    <DeltaText color={color}>{text}</DeltaText>
    </>
    )
}

export default Delta