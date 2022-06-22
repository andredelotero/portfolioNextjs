import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import {
  Container,
  StyledNavbar,
  StyledName,
  StyledMenu,
  StyledMenuItem,
} from './styles'
import { links } from './links'

const Navbar = () => {
  const { t } = useTranslation('navbar')
  return (
    <Container>
      <StyledNavbar>
        <StyledName>Andre Gama del Otero - {t('frontEnd')}</StyledName>
        <StyledMenu>
          {links.map(({ name, path }) => {
            return (
              <StyledMenuItem key={name}>
                <Link href={path} scroll={true} replace role="link">
                  <a>{t(name)}</a>
                </Link>
              </StyledMenuItem>
            )
          })}
        </StyledMenu>
      </StyledNavbar>
    </Container>
  )
}

export default Navbar
