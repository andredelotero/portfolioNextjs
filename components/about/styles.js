import styled from 'styled-components'
import { HomeContainer } from '../home/styles'

export const AboutContainer = styled(HomeContainer)`
  padding-top: 100px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    padding-inline: 2rem;
  }
`

export const StyledH2 = styled.h2`
  margin: 2rem auto 0 auto;
  padding: 0;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  width: auto;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-left: 0;
    font-size: 4vw;
    line-height: 6vw;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 4rem;
    letter-spacing: -1px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`

export const StyledH2Left = styled(StyledH2)`
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin: 1.2rem auto 0 0;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 450px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1300px;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const AboutDetail = styled.div`
  color: #ffffff;
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  overflow-x: hidden;
  span {
    font-weight: 400;
    line-height: 1.5;
    display: block;
    margin: 1rem 0 0rem 0.5rem;
  }
  a,
  a:visited {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    max-width: 45%;
    margin: 1rem auto;
    span {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
  @media screen and (min-width: 1024px) {
    span {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1300px;
    justify-content: space-between;
  }
`

export const ProjectContainer = styled.div`
  border: 1px solid #606060;
  width: 90%;
  max-width: 450px;
  margin: 3rem auto 0 auto;
  padding-bottom: 1rem;
`

export const ProjectDetail = styled(AboutDetail)`
  text-align: center;
  max-width: 100%;
  span {
    width: fit-content;
    margin-inline: auto;
    transition: border 250ms linear;
    border-bottom: 1px solid transparent;
    :hover {
      border-bottom: 1px solid #8b63d4;
    }
    a {
      font-weight: 300;
    }
  }
  @media screen and (min-width: 1024px) {
    span {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`

export const ProjectTitle = styled.h3`
  margin: 1.5rem auto;
  font-size: 1.6rem;
  font-weight: 500;
`

export const ProjectDescription = styled.p`
  margin: 1rem auto 2rem auto;
  font-size: 1rem;
  line-height: 1.6rem;
`
