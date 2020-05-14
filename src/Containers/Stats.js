import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import StatCard from "../Components/StatCard";
import { Grid } from "./Grid.styled";

const Header = styled.h3`
  color: ${(props) => props.theme.textLight};
  font-weight: 700;
  border-bottom: 0;
  grid-column: 1/-1;
`;

function Stats({ cardData }) {
  return (
    <Grid>
      <Header> Overview - Today</Header>
      {cardData.map((cardObj) => (
        <StatCard
          key={cardObj.value}
          social={cardObj.social}
          statName={cardObj.statName}
          value={cardObj.value}
          delta={cardObj.delta}
        />
      ))}
    </Grid>
  );
}

Stats.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      social: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      statName: PropTypes.string.isRequired,
      delta: PropTypes.number.isRequired,
    })
  ),
};

export default Stats;
