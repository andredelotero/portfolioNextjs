import { HomeContainer, ImageContainer, StyledH1 } from "./styles";
import Image from "next/image";
import styles from "./styles.module.css";
import { CTA } from "../cta";
import profile from "../../public/perfil.webp";
import { MainTitle } from "../title";

export const Home = () => {
  return (
    <section id="Home">
      <HomeContainer>
        <StyledH1>
          <span>Hello.</span>I'm André, Front-end developer.
        </StyledH1>
        <ImageContainer>
          <Image
            src={profile.src}
            width={250}
            height={250}
            layout="responsive"
            className={styles.profileImage}
          />
        </ImageContainer>
        <CTA />
      </HomeContainer>
    </section>
  );
};
