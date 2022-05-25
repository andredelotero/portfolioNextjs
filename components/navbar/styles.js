import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #8b63d4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

export const StyledNavbar = styled.nav`
  max-width: 1440px;
  width: 100%;
  background-color: #1d1d1e;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    padding: 0 2rem;
    justify-content: space-between;
  }
`

export const StyledName = styled.p`
  background-color: #1d1d1e;
  color: #ffffff;
  font-size: 18px;
  inline-size: 30%;
  height: 20px;
  box-sizing: border-box;
  padding-right: 4rem;
  width: auto;
  display: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (min-width: 420px) {
    display: inline;
  }
`

export const StyledMenu = styled.ul`
  display: flex;
`

export const StyledMenuItem = styled.li`
  color: #ffffff;
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  box-sizing: border-box;
  padding: 0;
  border-bottom: 1px solid transparent;
  transition: border 250ms linear;
  user-select: none;
  :not(:last-child) {
    margin: 0 2rem 0 0;
  }
  :hover {
    border-bottom: 1px solid #8b63d4;
  }
  span {
    white-space: nowrap;
  }
`
