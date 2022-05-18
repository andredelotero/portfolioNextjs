import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: auto;
  ::before {
    content: "${(props) => props.backgroundTitle}";
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    opacity: 0.04;
    font-size: ${(props) => props.dynamicFontSize}px;
    font-weight: 800;
  }
`;
export const H1Title = styled.h1`
  padding: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: ${(props) => props.dynamicFontSize / 1.3}px;
  text-transform: capitalize;
  color: #fff;
`;
