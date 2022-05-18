import { HomeContainer, ImageContainer, StyledH1 } from "./styles";
import Image from "next/image";
import styles from "./styles.module.css";
import { CTA } from "../cta";
import profile from "../../public/perfil.webp";
import { MainTitle } from "../title";

export const Home = () => {
  return (
    <section id="home">
      <HomeContainer>
        <MainTitle title="Hello" bgTitle="home" />
        <StyledH1>I'm André, Front-end developer.</StyledH1>
        <ImageContainer>
          <Image
            src={profile.src}
            width={656}
            height={656}
            layout="responsive"
            className={styles.profileImage}
          />
        </ImageContainer>
        <CTA />
      </HomeContainer>
    </section>
  );
};
