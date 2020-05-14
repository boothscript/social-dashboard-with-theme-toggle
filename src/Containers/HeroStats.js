import React from "react";
import PropTypes from "prop-types";

import HeroCard from "../Components/HeroCard";
import { Grid } from "./Grid.styled";

function HeroStats({ cardData }) {
  return (
    <Grid>
      {cardData.map((cardObj) => (
        <HeroCard
          key={cardObj.value}
          social={cardObj.social}
          username={cardObj.username}
          value={cardObj.value}
          delta={cardObj.delta}
          text={cardObj.text}
        />
      ))}
    </Grid>
  );
}
HeroStats.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      social: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      delta: PropTypes.number.isRequired,
    })
  ),
};

export default HeroStats;
