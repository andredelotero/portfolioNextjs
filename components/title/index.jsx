import { H1Title, TitleContainer } from "./styles";

export const MainTitle = ({ title }) => {
  return (
    <TitleContainer title={title}>
      <H1Title>{title}</H1Title>
    </TitleContainer>
  );
};
