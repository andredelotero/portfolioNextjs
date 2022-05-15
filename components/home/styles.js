import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  width: 100%;
  height: auto;
  position: relative;
  ::before {
    content: " HOME";
    color: #fff;
    position: absolute;
    top: -20px;
    opacity: 0.05;
    font-size: 6rem;
    font-weight: 800;
  }
`;

export const StyledH1 = styled.h1`
  margin: 0 auto;
  padding: 0;
  font-size: 3.5rem;
  line-height: 5rem;
  color: #ffffff;
  width: 340px;
  text-align: center;
  z-index: 1;
  span {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: none;
`;
