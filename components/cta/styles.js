import styled from "styled-components";

export const StyledCta = styled.div`
  height: auto;
  width: auto;
  cursor: pointer;
  padding: 1rem 2rem;
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
  box-shadow: 0px 0px 50px 1px #7b63d4;
  user-select: none;
  :hover {
    box-shadow: 0px 0px 10px 1px #7b63d4;
  }
`;
