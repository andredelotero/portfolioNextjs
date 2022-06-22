import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { StyledCta } from './styles'

export const CTA = () => {
  const { t } = useTranslation('common')
  return (
    <Link href="#contact" passHref role="link">
      <StyledCta>{t('contactMe')}</StyledCta>
    </Link>
  )
}
