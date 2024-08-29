import React from "react";
import styled from "styled-components";

import BackgroundHero from "./BackgroundHero";
import MidgroundHero from "./MidgroundHero";
import ForegroundHero from "./ForegroundHero";

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
`;

function ParallaxHeroSection() {
  return (
    <StyledSVGWrapper>
      <BackgroundHero />
      <MidgroundHero />
      <ForegroundHero />
    </StyledSVGWrapper>
  );
}

export default ParallaxHeroSection;
