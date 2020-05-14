import styled from "styled-components";

export const Div = styled.div`
  background: ${(props) => props.theme.cardBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 200px;
  border-radius: 0 0 6px 6px;
  margin-top: 6px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: ${({ theme, social }) => theme[social]};
    border-radius: 6px 6px 0 0;
    top: -6px;
  }
  &:hover {
    background: ${(props) => props.theme.cardBgHover};
    cursor: pointer;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
`;
export const Logo = styled.img``;
export const User = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.textLight};
  margin-left: 1em;
  margin-bottom: 0;
`;
export const Metric = styled.p`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.textDark};
  margin-bottom: 0;
`;
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 6px;
  color: ${(props) => props.theme.textLight};
`;
