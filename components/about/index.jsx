import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import {
  AboutContainer,
  ContentContainer,
  StyledH2,
  StyledH2Left,
  AboutDetail,
  ProjectContainer,
  ProjectDetail,
  ProjectsContainer,
  ProjectTitle,
  ProjectDescription,
} from './styles'
import { MainTitle } from '../title'

import { projects } from './projects'

const About = () => {
  const { t } = useTranslation('about')
  return (
    <section id="about">
      <AboutContainer>
        <MainTitle title={t('title')} bgTitle={t('subTitle')} />
        <StyledH2>{t('whoIAm')}</StyledH2>
        <ContentContainer>
          <AboutDetail>
            <StyledH2Left>{t('me')}</StyledH2Left>
            <span>{t('intro')}</span>
            <span>{t('description')}</span>
          </AboutDetail>
          <AboutDetail>
            <StyledH2Left>{t('skills')}</StyledH2Left>
            <span>{t('skillsList')}</span>
            <StyledH2Left>{t('thisSite')}</StyledH2Left>
            <span>{t('thisSiteDescription')}</span>
          </AboutDetail>
        </ContentContainer>

        <StyledH2>{t('projects')}</StyledH2>
        <ProjectsContainer>
          {projects.map(({ photo, title, description, link }) => {
            return (
              <ProjectContainer key={title}>
                <Image
                  src={photo}
                  alt={t(title)}
                  layout="responsive"
                  width={450}
                  height={228}
                />
                <ProjectDetail>
                  <ProjectTitle>{t(title)}</ProjectTitle>
                  <ProjectDescription>{t(description)}</ProjectDescription>
                  <span>
                    <Link href={link}>
                      <a target="_blank">{link}</a>
                    </Link>
                  </span>
                </ProjectDetail>
              </ProjectContainer>
            )
          })}
        </ProjectsContainer>
      </AboutContainer>
    </section>
  )
}

export default About
