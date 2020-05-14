import styled from "styled-components";

export const Div = styled.div`
  grid-column: 2/-2;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    height: 265px;
    background: ${(props) => props.theme.topBgPattern};
    border-radius: 0 0 16px 16px;
    top: 0;
    left: 0;
    @media (min-width: ${(props) => props.theme.tablet2}) {
      height: 200px;
    }
  }

  @media (min-width: ${(props) => props.theme.tablet2}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2em;
  }
`;
export const TitleWrap = styled.div`
  padding-top: 2em;
  border-bottom: 1px solid ${(props) => props.theme.textLight};
  z-index: 10;
  @media (min-width: ${(props) => props.theme.tablet2}) {
    border-bottom: none;
  }
`;
export const Title = styled.h2`
  color: ${(props) => props.theme.textDark};
  font-weight: 700;
  margin-bottom: 0.25em;
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme.textLight};
  font-weight: 700;
`;
export const ToggleThemeWrap = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
  z-index: 10;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.textLight};
  font-weight: 700;
  line-height: 30px;
  margin-right: 1em;
`;
export const ThemeSwitch = styled.input`
  position: absolute;
  opacity: 0;

  /* toggle background */
  & + span::before {
    content: "";
    display: block;
    height: 30px;
    width: 60px;
    border-radius: 50px;
    background: ${(props) => props.theme.toggle};
    cursor: pointer;
  }
  /* toggle button */
  & + span::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    transform: translateX(4px);
    height: 24px;
    width: 24px;
    background: pink;
    border-radius: 50%;
    transition: transform 0.1s ease-in;
    background: ${(props) => props.theme.background};
    cursor: pointer;
  }
  &:checked + span::after {
    transform: translateX(35px);
  }
`;
