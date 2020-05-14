import React from "react";
import PropTypes from "prop-types";

import statHelper from "../helpers/statHelper";
import Delta from "./Delta";

import {
  Div,
  Header,
  Logo,
  User,
  Main,
  Metric,
  Text,
  Footer,
} from "./HeroCard.styled";

function HeroCard({ social, username, value, text, delta }) {
  return (
    <Div social={social}>
      <Header>
        <Logo src={`images/icon-${social}.svg`} alt="facebook" />
        <User>{username}</User>
      </Header>
      <Main>
        <Metric>{statHelper(value)}</Metric>
        <Text>{text}</Text>
      </Main>
      <Footer>
        <Delta delta={delta} suffix="Today" />
      </Footer>
    </Div>
  );
}

HeroCard.propTypes = {
  social: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  delta: PropTypes.number.isRequired,
};

export default HeroCard;
