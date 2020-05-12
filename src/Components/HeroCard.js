import React from "react"
import styled from "styled-components"

import Delta from "./Delta"

const Div = styled.div`
    width: 350px;
    background: ${props => props.theme.cardBg};
    border-top: 6px solid ${({theme, social}) => theme[social]};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 250px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    height: 30%;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40%;
    `
const Footer = styled.div`
    display: flex;
    align-items: center;
    height: 30%;
`
const Logo = styled.img``
const User = styled.p`
    font-weight: 700;
    color: ${props => props.theme.textLight};
    margin-left: 1em;
    margin-bottom: 0;
`
const Metric = styled.p`
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.textDark};
    margin-bottom: 0;
    
`
const Text = styled.p`
    text-transform: uppercase;
    font-weight: 400;
    font-size: .9rem;
    letter-spacing: 6px;
    color: ${props => props.theme.textLight};

`


function HeroCard({social, user, value, text, delta}){

    

return (
    <Div social={social}>
        <Header>
            <Logo src={`images/icon-${social}.svg`} alt="facebook"/>
            <User>{user}</User>
        </Header>
        <Main>
            <Metric>{value}</Metric>
            <Text >{text}</Text>
        </Main>
        <Footer>
            <Delta delta={delta} suffix="Today" />
        </Footer>
    </Div>
)
}

export default HeroCard