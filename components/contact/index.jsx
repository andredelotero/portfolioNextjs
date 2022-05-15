import Link from "next/link";
import Image from "next/image";

import { ContactContainer, LogosContainer, LogoContainer } from "./styles";
import { AboutH1, StyledH2 } from "../about/styles";

import { contacts } from "./contacts";

export const Contact = () => {
  return (
    <section id="contact">
      <ContactContainer>
        <AboutH1>Contact</AboutH1>
        <StyledH2>Let's get in touch</StyledH2>
        <LogosContainer>
          {contacts.map(({ photo, alt, link }) => {
            return (
              <LogoContainer key={alt}>
                <Link href={link}>
                  <a target="_blank">
                    <Image
                      src={photo}
                      alt={alt}
                      layout="responsive"
                      width={60}
                      height={60}
                    />
                  </a>
                </Link>
              </LogoContainer>
            );
          })}
        </LogosContainer>
      </ContactContainer>
    </section>
  );
};
