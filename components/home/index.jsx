import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  HomeContainer,
  ImageContainer,
  StyledH1,
  TotalContainer,
} from "./styles";
import styles from "./styles.module.css";
import { CTA } from "../cta";
import profile from "../../public/perfil.webp";
import { MainTitle } from "../title";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <section id="home">
      <TotalContainer>
        <HomeContainer>
          <MainTitle title={t("title")} bgTitle={t("subTitle")} />
          <StyledH1>{t("iAm")}</StyledH1>
          <CTA />
        </HomeContainer>
        <ImageContainer>
          <Image
            src={profile.src}
            width={656}
            height={656}
            layout="responsive"
            priority={false}
            className={styles.profileImage}
            alt={t("profilePic")}
          />
        </ImageContainer>
      </TotalContainer>
    </section>
  );
};

export default Home;
