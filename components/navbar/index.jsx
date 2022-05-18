import {
  Container,
  StyledNavbar,
  StyledName,
  StyledMenu,
  StyledMenuItem,
} from "./styles";
import ReactScroll from "react-scroll";
import { links } from "./links";

export const Navbar = () => {
  return (
    <Container>
      <StyledNavbar>
        <StyledName>Andre Gama del Otero - Front-end developer</StyledName>
        <StyledMenu>
          {links.map(({ name, path }) => {
            const offsetPath = path === "home" ? -130 : 0;
            return (
              <StyledMenuItem key={name}>
                <ReactScroll.Link
                  to={path}
                  spy
                  smooth
                  offset={offsetPath}
                  duration={500}
                >
                  {name}
                </ReactScroll.Link>
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      </StyledNavbar>
    </Container>
  );
};
