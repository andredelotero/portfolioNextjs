import styled from "styled-components";
import { StyledH1, HomeContainer } from "../home/styles";

export const ContactContainer = styled(HomeContainer)`
  padding-top: 100px;
  margin-top: 0;
  ::before {
    padding-top: 100px;
    content: "CONTACT";
    font-size: 4rem;
    top: 0;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  margin: 1rem auto 3rem auto;
`;

export const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`;
