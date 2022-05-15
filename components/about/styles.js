import styled from "styled-components";
import { StyledH1 } from "../home/styles";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  flex-direction: column;
  ::before {
    content: " ABOUT";
    color: #fff;
    position: absolute;
    top: -14px;
    opacity: 0.05;
    font-size: 5.8rem;
    font-weight: 800;
  }
`;

export const StyledH2 = styled(StyledH1)`
  font-size: 1rem;
`;

export const AboutDetail = styled.div`
  color: #ffffff;
  width: 90%;
  max-width: 450px;
  margin: 0 auto 1rem auto;
  line-height: 1.5rem;
`;
