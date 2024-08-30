import React from "react";
import styled from "styled-components";

const StyledCrossRevealContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  .crossRevealImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(50%, 0);
  }
  .afterImage img {
    transform: translate(-50%, 0);
  }
  .crossRevealImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .person__content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person__name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .person__job {
      line-height: 1.3;
      font-weight: 400;
      letter-spacing: -0.022em;
      font-size: 17px;
    }
  }
  .landscape__wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
    .quote__sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }
    .author__name {
      font-weight: 700;
      font-size: 28px;
      line-height: 1.14286;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
  }
`;

function CrossRevealSection({
  face,
  landscape,
  name,
  job,
  sentenceOne,
  sentenceTwo,
}) {
  return (
    <StyledCrossRevealContainer>
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person__content">
          <h3 className="person__name">{name}</h3>
          <p className="person__job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage">
        <img src={landscape} alt="" />
      </div>
      <div className="landscape__wrapper">
        <p className="quote__sentence">
          {sentenceOne}
          <br />
          {sentenceTwo}
        </p>
        <p className="author__name">{name}</p>
      </div>
    </StyledCrossRevealContainer>
  );
}
export default CrossRevealSection;
