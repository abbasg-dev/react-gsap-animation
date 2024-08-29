import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter=spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title={"Take Care"}
        text={
          "Poutine trust fund DIY pabst, art party hoodie you probably haven't heard of them single-origin coffee kombucha slow-carb glossier occupy cliche."
        }
      />
      <ContentSection
        title={"Take Care Two"}
        text={
          "Poutine trust fund DIY pabst, art party hoodie you probably haven't heard of them single-origin coffee kombucha slow-carb glossier occupy cliche."
        }
      />
    </>
  );
}

export default App;
