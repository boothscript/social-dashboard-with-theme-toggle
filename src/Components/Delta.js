import React from "react";
import styled from "styled-components";

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

export default Delta;
