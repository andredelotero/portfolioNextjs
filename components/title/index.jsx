import { H1Title, TitleContainer } from "./styles";

export const MainTitle = ({ title = "", bgTitle = "" }) => {
  return (
    <TitleContainer backgroundTitle={bgTitle}>
      <H1Title>{title}</H1Title>
    </TitleContainer>
  );
};
