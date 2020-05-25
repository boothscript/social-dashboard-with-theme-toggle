import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import themes from "./Theme";
import Header from "./Components/Header";
import { Grid } from "./App.styled";
import HeroStats from "./Containers/HeroStats";
import Stats from "./Containers/Stats";

const LIGHT = "light";
const DARK = "dark";

function App() {
  const [theme, setTheme] = useState(LIGHT);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  }
  const [heroStats, setHeroStats] = useState([]);
  const [stats, setStats] = useState([]);
  const [followTotal, setFollowTotal] = useState();

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then(({ stats, heroStats, followTotal }) => {
        setHeroStats(heroStats);
        setStats(stats);
        setFollowTotal(followTotal);
      });
  }, []);

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
