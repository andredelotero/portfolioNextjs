import { Container, StyledH2, AboutDetail } from "./styles";
import { StyledH1 } from "../home/styles";
import Image from "next/image";
import styles from "./styles.module.css";
export const About = () => {
  return (
    <section id="about">
      <Container>
        <StyledH1>About me.</StyledH1>
        <StyledH2>Who I am, my skills, what I do</StyledH2>
        <StyledH2>Me</StyledH2>
        <AboutDetail>
          I'm a Frontend (react) developer from Brazil, based in Mar del Plata,
          Argentina.
        </AboutDetail>
        <AboutDetail>
          I care about site speed, user experience, cross browser compatibility,
          and of course, responsiveness (I always start projects in a
          mobile-first approach)
        </AboutDetail>
      </Container>
    </section>
  );
};
