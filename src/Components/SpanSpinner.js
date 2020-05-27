import React from "react";
import styled, { keyframes, css } from "styled-components";

const growPulse = keyframes`
     0% {
    transform: scale(0.1);
    opacity: 0;
  }
  30% {
    opacity: 0.5;
  }
  60% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const animation = css`
  ${growPulse} 1.5s ease-out infinite;
`;

const Span = styled.span`
  &::after {
    content: "";
    width: 0.7em;
    height: 0.7em;
    border-radius: 100%;
    display: inline-block;
    background-color: ${(props) =>
      props.color ? props.color : "hsl(228, 34%, 66%)"};
    animation: ${animation};
  }
`;

const AccessabilityMessage = styled.span`
  position: absolute;
  visibility: hidden;
`;

function SpanSpinner({ color }) {
  return (
    <>
      <Span role="alert" aria-live="assertive"></Span>
      <AccessabilityMessage>Content is loading...</AccessabilityMessage>
    </>
  );
}

// wrapper for Grids
export const SpinnerWrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default SpanSpinner;
