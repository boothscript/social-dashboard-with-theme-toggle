import styled from "styled-components"

export const Grid = styled.div`
    background: ${props => props.theme.cardBg};
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    padding: 1.3em 1.7em;
    border-radius: 6px;
    height: 100px;
    &:hover{
        background: ${props => props.theme.cardBgHover};
        cursor: pointer;
    }

`
export const Text = styled.p`
    font-weight: 700;
    font-size: .9em;
    color: ${props => props.theme.textLight};
    margin-top: auto;
    margin-bottom: 16px;


`
export const Icon = styled.img`
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 16px;
`

export const Metric = styled.p`
    margin-bottom: 0;
    margin-top: auto;
    font-size: 2.25rem;
    font-weight: 700;
    color: ${props => props.theme.textDark};
    line-height: 1;
`

export const DeltaWrapper = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    align-items: center;
    

`