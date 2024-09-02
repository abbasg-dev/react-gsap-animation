import React from "react";
import styled from "styled-components";

const StyledVideoSequenceSection = styled.div`
  background: #080f0f;
  width: 100%;
  position: relative;
  .video__sequence__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .video__sequence__container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #080f0f;
    .video__sequence__text {
      flex: 0 0 50%;
      max-width: 50%;
      h1 {
        font-size: 96px;
        line-height: 0.875;
        font-weight: 700;
        letter-spacing: 0.008em;
        color: #fff;
      }
      h2 {
        padding: 10px;
        font-size: 26px;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: 0.002em;
        margin-top: 8px;
        color: #fff;
      }
      a.video__sequence__button {
        display: inline-block;
        padding: 1em 2em;
        margin: 7em 0.5em 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        font-weight: 400;
        color: #080f0f;
        background-color: #00efeb;
        text-align: center;
        transition: all 0.6s;
        &:hover {
          background-color: #00bcb9;
        }
      }
    }
    .video__sequence__image {
      position: relative;
      flex: 0 0 50%;
      canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
      }
    }
  }
`;

function VideoSequenceSection() {
  return (
    <StyledVideoSequenceSection>
      <div className="video__sequence__wrapper">
        <div className="video__sequence__container">
          <div className="video__sequence__text">
            <h1>ZER&Oslash;</h1>
            <h2>
              How big is your
              <br />
              environmental footprint?
              <br />
              The app for Cutting Carbon
              <br />
              and Caring for the Climate
            </h2>
            <a href="google.com" className="video__sequence__button">
              Download
            </a>
          </div>
          <div className="video__sequence__image">
            <canvas />
          </div>
        </div>
      </div>
    </StyledVideoSequenceSection>
  );
}
export default VideoSequenceSection;
