import Link from "next/link";

import { StyledCta } from "./styles";

export const CTA = () => {
  return (
    <Link href="/#contact">
      <StyledCta>
        <a>CONTACT ME</a>
      </StyledCta>
    </Link>
  );
};
