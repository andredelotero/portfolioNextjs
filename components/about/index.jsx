import Image from "next/image";
import Link from "next/link";
import {
  AboutContainer,
  StyledH2,
  StyledH2Left,
  AboutDetail,
  AboutH1,
  ProjectContainer,
  ProjectDetail,
} from "./styles";

import { projects } from "./projects";

export const About = () => {
  return (
    <section id="about">
      <AboutContainer>
        <AboutH1>About me.</AboutH1>
        <StyledH2>Who I am, my skills, what I do</StyledH2>
        <AboutDetail>
          <StyledH2Left>Me</StyledH2Left>
          <span>
            I'm a Front-end developer from Brazil, living in Mar del Plata,
            Argentina.
          </span>
          <span>
            I care about site speed, user experience, cross browser
            compatibility, and of course, responsiveness (I always start
            projects in a mobile-first approach)
          </span>
        </AboutDetail>
        <AboutDetail>
          <StyledH2Left>Skills and tools</StyledH2Left>
          <span>
            HTML, CSS, JavaScript, React, NextJS, JSX, Jquery, Bootstrap, Sass,
            Tailwind, Styled Components, VSCode, Git / Github, Figma, Trello,
            Slack.
          </span>
        </AboutDetail>
        <StyledH2>Projects</StyledH2>
        {projects.map(({ photo, title, description, link }) => {
          return (
            <ProjectContainer key={title}>
              <Image
                src={photo}
                alt={title}
                layout="responsive"
                width={450}
                height={228}
              />
              <ProjectDetail>
                <StyledH2>{title}</StyledH2>
                <span>{description}</span>
                <span>
                  <Link href={link}>
                    <a target="_blank">{link}</a>
                  </Link>
                </span>
              </ProjectDetail>
            </ProjectContainer>
          );
        })}
      </AboutContainer>
    </section>
  );
};
