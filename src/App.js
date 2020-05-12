import React, {useState} from 'react';
import {ThemeProvider} from "styled-components"
import './App.css';

import themes from "./Theme"
import Header from "./Components/Header"
import HeroCard from "./Components/HeroCard"
import StatCard from "./Components/StatCard"
import HeroStats from "./Containers/HeroStats"
import Stats from "./Containers/Stats"

function App() {

  const [theme, setTheme] = useState("light")

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <Header toggleThemeFunc={toggleTheme} /> */}
      <HeroCard social="facebook" user="@nathanf" value={1987} text="Followers" delta={12} />
      
    </ThemeProvider>
  );
}

export default App;
