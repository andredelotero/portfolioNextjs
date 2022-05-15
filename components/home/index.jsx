import { HomeContainer, ImageContainer, StyledH1 } from "./styles";
import Image from "next/image";
import styles from "./styles.module.css";
import { CTA } from "../cta";
export const Home = () => {
  return (
    <section id="Home">
      <HomeContainer>
        <StyledH1>
          <span>Hello.</span>I'm André, Frontend (React) developer.
        </StyledH1>
        <ImageContainer>
          <Image
            src="/perfil.webp"
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
