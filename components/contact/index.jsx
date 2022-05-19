import Link from "next/link";
import Image from "next/image";

import { ContactH2, LogosContainer, LogoContainer } from "./styles";
import { AboutContainer } from "../about/styles";

import { contacts } from "./contacts";
import { MainTitle } from "../title";

export const Contact = () => {
  return (
    <section id="contact">
      <AboutContainer>
        <MainTitle title="Contact" bgTitle="contact" />
        <ContactH2>Let's get in touch</ContactH2>
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
      </AboutContainer>
    </section>
  );
};
