import { Link } from 'react-scroll'
import { useTranslation } from 'next-i18next'

import { StyledCta } from './styles'

export const CTA = () => {
  const { t } = useTranslation('common')
  return (
    <Link to="contact" spy smooth offset={0} duration={500} role="link">
      <StyledCta>{t('contactMe')}</StyledCta>
    </Link>
  )
}
