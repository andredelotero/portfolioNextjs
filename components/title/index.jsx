import { useRef } from "react";
import { H1Title, TitleContainer } from "./styles";
import { useContainerDimensions } from "../../hooks/useContainerDimension";

export const MainTitle = ({ title = "", bgTitle = "" }) => {
  const titleContainerRef = useRef();
  const { width } = useContainerDimensions(titleContainerRef);
  const titleFontSize = Math.floor(width / title.length);
  const bgTitleFontSize = Math.floor(width / bgTitle.length);
  return (
    <TitleContainer
      ref={titleContainerRef}
      dynamicFontSize={bgTitleFontSize}
      backgroundTitle={bgTitle}
    >
      <H1Title dynamicFontSize={titleFontSize}>{title}</H1Title>
    </TitleContainer>
  );
};
