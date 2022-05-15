import Link from "next/link";
import Image from "next/image";

import { ContactContainer, LogosContainer, LogoContainer } from "./styles";
import { AboutH1, StyledH2 } from "../about/styles";

import LinkedinLogo from "../../public/linkedin.png";
import GithubLogo from "../../public/github.png";
export const Contact = () => {
  return (
    <section id="contact">
      <ContactContainer>
        <AboutH1>Contact</AboutH1>
        <StyledH2>Let's get in touch</StyledH2>
        <LogosContainer>
          <LogoContainer>
            <Link href="https://www.linkedin.com/in/andredelotero/">
              <a target="_blank">
                <Image
                  src={LinkedinLogo}
                  layout="responsive"
                  width={60}
                  height={60}
                />{" "}
                ;
              </a>
            </Link>
          </LogoContainer>
          <LogoContainer>
            <Link href="https://github.com/andredelotero">
              <a target="_blank">
                <Image
                  src={GithubLogo}
                  layout="responsive"
                  width={60}
                  height={60}
                />{" "}
                ;
              </a>
            </Link>
          </LogoContainer>
        </LogosContainer>
      </ContactContainer>
    </section>
  );
};
