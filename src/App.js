import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes from "./Theme";
import Header from "./Components/Header";
import { Grid } from "./App.styled";
import HeroStats from "./Containers/HeroStats";
import Stats from "./Containers/Stats";
import { followTotal, heroStats, stats } from "./Data/data";

const LIGHT = "light";
const DARK = "dark";

function App() {
  const [theme, setTheme] = useState(LIGHT);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Grid>
        <Header
          followStat={followTotal}
          toggleFunc={toggleTheme}
          toggleState={theme}
          toggleTypes={{ LIGHT, DARK }}
        />
        <HeroStats cardData={heroStats} />
        <Stats cardData={stats} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
