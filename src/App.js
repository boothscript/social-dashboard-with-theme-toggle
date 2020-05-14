import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import themes from "./Theme";
import Header from "./Components/Header";
import { Grid } from "./App.styled";
import HeroStats from "./Containers/HeroStats";
import Stats from "./Containers/Stats";
import { followTotal, heroStats, stats } from "./Data/data";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Grid>
        <Header
          followStat={followTotal}
          toggleFunc={toggleTheme}
          toggleState={theme}
        />
        <HeroStats cardData={heroStats} />
        <Stats cardData={stats} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
