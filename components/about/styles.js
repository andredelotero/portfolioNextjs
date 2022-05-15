import styled from "styled-components";
import { StyledH1, HomeContainer } from "../home/styles";

export const AboutContainer = styled(HomeContainer)`
  margin-top: 50px;
  ::before {
    content: " ABOUT";
  }
`;

export const AboutH1 = styled(StyledH1)`
  margin-bottom: 1rem;
`;

export const StyledH2 = styled.h2`
  margin: 0 auto;
  padding: 0;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  width: auto;
`;

export const StyledH2Left = styled(StyledH2)`
  text-align: left;
`;

export const AboutDetail = styled.div`
  color: #ffffff;
  width: 90%;
  max-width: 450px;
  margin: 2rem auto 1rem auto;
  overflow-x: hidden;
  span {
    font-weight: 400;
    line-height: 1.5rem;
    display: block;
    margin: 1rem 0;
  }
  a,
  a:visited {
    color: #ffffff;
  }
`;

export const ProjectContainer = styled.div`
  border: 1px solid #606060;
  width: 90%;
  max-width: 450px;
  margin: 2rem auto;
`;

export const ProjectDetail = styled(AboutDetail)`
  text-align: center;
`;
