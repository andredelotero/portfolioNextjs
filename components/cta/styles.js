import styled from 'styled-components'

export const StyledCta = styled.div`
  width: auto;
  padding: 1rem 2rem;
  cursor: pointer;
  margin: 4rem auto 0 auto;
  background-color: #7b63d4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 350ms;
  box-shadow: -4px -4px 2px 0px #1d1d1e, -6px -6px 2px 0px #15b874;
  user-select: none;
  :hover {
    box-shadow: 4px 4px 2px 0px #1d1d1e, 6px 6px 2px 0px #15b874;
  }
`
