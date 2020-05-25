import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DeltaText = styled.p`
  font-weight: 700;
  font-size: 0.85rem;
  color: ${({ theme, color }) => theme[color]};
  margin-bottom: 0;
  margin-left: 0.4em;
`;

function Delta({ delta, suffix }) {
  const text = `${Math.abs(delta)} ${suffix}`;
  const color = delta > 0 ? "green" : "red";
  return (
    <>
      <img
        src={`images/icon-arrow-${color}.svg`}
        alt="Delta indication arrow"
      />
      <DeltaText color={color}>{text}</DeltaText>
    </>
  );
}

Delta.propTypes = {
  delta: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
};

export default Delta;
