import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { ContactH2, LogosContainer, LogoContainer } from './styles'
import { AboutContainer } from '../about/styles'

import { contacts } from './contacts'
import { MainTitle } from '../title'

const Contact = () => {
  const { t } = useTranslation('contact')
  return (
    <section id="contact">
      <AboutContainer>
        <MainTitle title={t('title')} bgTitle={t('subTitle')} />
        <ContactH2>{t('letsGet')}</ContactH2>
        <LogosContainer>
          {contacts.map(({ photo, alt, link }) => {
            return (
              <LogoContainer key={alt}>
                <Link href={link} as={link}>
                  <a target="_blank">
                    <Image
                      src={photo}
                      alt={t(alt)}
                      layout="responsive"
                      width={56}
                      height={56}
                    />
                  </a>
                </Link>
              </LogoContainer>
            )
          })}
        </LogosContainer>
      </AboutContainer>
    </section>
  )
}

export default Contact
