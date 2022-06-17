import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  position: relative;
  height: auto;
  ::before {
    content: '${(props) => props.backgroundTitle}';
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    opacity: 0.04;
    font-size: calc(1.4rem + 10vw);
    font-weight: 500;
    @media screen and (min-width: 1440px) {
      font-size: 10rem;
    }
  }
  @media screen and (min-width: 768px) {
    left: 0;
    justify-content: flex-start;
  }
`
export const H1Title = styled.h1`
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: calc(1rem + 6vw);
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
  @media screen and (min-width: 1440px) {
    font-size: 7rem;
  }
`
