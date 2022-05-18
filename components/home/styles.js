import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 130px;
  box-sizing: border-box;
  max-width: 1440px;
  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    flex: 2;
    align-items: flex-start;
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
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-left: 0;
    font-size: 10vw;
    line-height: 12vw;
    width: 85%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 9rem;
    line-height: 11rem;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  display: none;
  flex: 1;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30%;
    height: 30%;
  }
`;
