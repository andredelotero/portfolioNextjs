import styled from "styled-components";
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  height: 26;
  border: 1px solid red;
  ::before {
    content: "${(props) => props.title}";
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    top: -1vw;
    opacity: 0.05;
    font-size: 26vw;
    font-weight: 800;
  }
`;
export const H1Title = styled.h1`
  padding: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 24vw;
  text-transform: capitalize;
  color: #fff;
`;
