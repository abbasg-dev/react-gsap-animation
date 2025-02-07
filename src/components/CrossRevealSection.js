import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledCrossRevealContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
  .crossRevealImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0px);
  }
  .afterImage img {
    transform: translate(-100%, 0);
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
  crossreveal,
}) {
  // animate the container one way
  const containerRef = useRef(null);
  // animate the image the opposite way at the same time
  const imageRef = useRef(null);
  // specify the point we want our animation to start
  const triggerRef = useRef(null);
  // target the person container
  const personRef = useRef(null);
  // target the quote container
  const quoteRef = useRef(null);

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // animate the container one way
    crossRevealTween
      .fromTo(
        containerRef.current,
        { [crossreveal]: 100, x: 0 },
        { [crossreveal]: 0 }
      )
      // animate the image the opposite way at the same time
      .fromTo(
        imageRef.current,
        { [crossreveal]: -100, x: 0 },
        { [crossreveal]: 0 },
        0
      )
      // fade in the name and job
      .from(personRef.current, { autoAlpha: 0 }, 0)
      // fade in the quote
      .from(quoteRef.current, { autoAlpha: 0, delay: 0.26 }, 0);
  }, [crossreveal]);

  return (
    <StyledCrossRevealContainer ref={triggerRef}>
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person__content" ref={personRef}>
          <h3 className="person__name">{name}</h3>
          <p className="person__job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landscape} alt="" ref={imageRef} />
      </div>
      <div ref={quoteRef} className="landscape__wrapper">
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
