import styled from 'styled-components'

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
`

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
`

export const StyledH1 = styled.h1`
  margin: 20px auto;
  padding: 0;
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: 0px;
  color: #ffffff;
  width: 340px;
  text-align: center;
  z-index: 1;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-left: 0;
    font-size: 9vw;
    line-height: 10vw;
    width: 85%;
  }

  @media screen and (min-width: 1024px) {
    letter-spacing: -2px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 8rem;
    line-height: 9rem;
  }
`

export const ImageContainer = styled.div`
  width: 0;
  height: 0;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
    flex: 1;
    width: 30%;
    height: 30%;
  }
`
