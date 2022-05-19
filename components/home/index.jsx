import {
  HomeContainer,
  ImageContainer,
  StyledH1,
  TotalContainer,
} from "./styles";
import Image from "next/image";
import styles from "./styles.module.css";
import { CTA } from "../cta";
import profile from "../../public/perfil.webp";
import { MainTitle } from "../title";

export const Home = () => {
  return (
    <section id="home">
      <TotalContainer>
        <HomeContainer>
          <MainTitle title="Hello" bgTitle="home" />
          <StyledH1>I'm André, Front-end developer.</StyledH1>
          <CTA />
        </HomeContainer>
        <ImageContainer>
          <Image
            src={profile.src}
            width={656}
            height={656}
            layout="responsive"
            className={styles.profileImage}
            alt="My profile picture"
          />
        </ImageContainer>
      </TotalContainer>
    </section>
  );
};
