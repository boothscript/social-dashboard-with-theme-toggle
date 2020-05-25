import React from "react";
import PropTypes from "prop-types";

import HeroCard from "../Components/HeroCard";
import { Grid } from "./Grid.styled";
import SpanSpinner, { SpinnerWrapper } from "../Components/SpanSpinner";

function HeroStats({ cardData }) {
  return (
    <Grid>
      {console.log({ cardData })}
      {cardData.length > 0 ? (
        cardData.map((cardObj) => (
          <HeroCard
            key={cardObj.value}
            social={cardObj.social}
            username={cardObj.username}
            value={cardObj.value}
            delta={cardObj.delta}
            text={cardObj.text}
          />
        ))
      ) : (
        <>
          <SpinnerWrapper>
            <SpanSpinner />
          </SpinnerWrapper>
        </>
      )}
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
