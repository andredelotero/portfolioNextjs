import ReactScroll from "react-scroll";
import { useTranslation } from "next-i18next";
import {
  Container,
  StyledNavbar,
  StyledName,
  StyledMenu,
  StyledMenuItem,
} from "./styles";
import { links } from "./links";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  return (
    <Container>
      <StyledNavbar>
        <StyledName>Andre Gama del Otero - {t("frontEnd")}</StyledName>
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
                  <span>{t(name)}</span>
                </ReactScroll.Link>
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
