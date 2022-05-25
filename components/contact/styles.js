import styled from 'styled-components'
import { StyledH2 } from '../about/styles'

export const ContactH2 = styled(StyledH2)`
  margin: 1rem;
`

export const LogosContainer = styled.div`
  display: flex;
  margin: 0 auto 4rem auto;
`

export const LogoContainer = styled.div`
  width: 33px;
  height: 33px;
  padding: 0.5rem;
  margin: 0 1rem;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 1024px) {
    width: 56px;
    height: 56px;
  }
`
