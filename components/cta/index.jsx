import ReactScroll from "react-scroll";

import { StyledCta } from "./styles";

export const CTA = () => {
  return (
    <ReactScroll.Link to="contact" spy smooth offset={0} duration={500}>
      <StyledCta>CONTACT ME</StyledCta>
    </ReactScroll.Link>
  );
};
