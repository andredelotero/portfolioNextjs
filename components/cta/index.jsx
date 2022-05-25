import ReactScroll from 'react-scroll'
import { useTranslation } from 'next-i18next'

import { StyledCta } from './styles'

export const CTA = () => {
  const { t } = useTranslation('common')
  return (
    <ReactScroll.Link to="contact" spy smooth offset={0} duration={500}>
      <StyledCta>{t('contactMe')}</StyledCta>
    </ReactScroll.Link>
  )
}
