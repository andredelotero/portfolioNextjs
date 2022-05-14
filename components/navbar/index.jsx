import {
  Container,
  StyledNavbar,
  StyledName,
  StyledMenu,
  StyledMenuItem,
} from "./styles";
import Link from "next/link";
import { links } from "./links";

export const Navbar = () => (
  <Container>
    <StyledNavbar>
      <StyledName>Andre Gama del Otero - Front-end developer</StyledName>
      <StyledMenu>
        {links.map(({ name, path }) => {
          return (
            <StyledMenuItem key={name}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </StyledNavbar>
  </Container>
);
