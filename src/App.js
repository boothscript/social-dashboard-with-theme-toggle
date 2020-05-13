import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components"
import './App.css';

import themes from "./Theme"
import Header from "./Components/Header"
import HeroCard from "./Components/HeroCard"
import StatCard from "./Components/StatCard"
import HeroStats from "./Containers/HeroStats"
import Stats from "./Containers/Stats"

import {followTotal, heroStats, stats} from "./Data/data"
const Grid = styled.div`
display: grid;
grid-template-columns: minmax(1em, 1fr) max(325px) minmax(1em, 1fr);
background: ${props => props.theme.background};

@media(min-width: ${props => props.theme.tablet}){
  grid-template-columns: minmax(1em, 1fr) max(500px) minmax(1em, 1fr);
}
@media(min-width: ${props => props.theme.desktop}){
  grid-template-columns: minmax(1em, 1fr) max(1000px) minmax(1em, 1fr);
}
`

function App() {


  const [theme, setTheme] = useState("light")

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }



  return (
    <ThemeProvider theme={themes[theme]}>
      <Grid>
        <Header followStat={followTotal} toggleFunc={toggleTheme} toggleState={theme}/>
      <HeroStats cardData={heroStats} />
      <Stats cardData={stats} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
