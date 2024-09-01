import React, { useRef } from "react";
import styled from "styled-components";
import box from "../assets/images/box.png";
import dayCream from "../assets/images/dayCream.png";
import nightCream from "../assets/images/nightCream.png";

const StyledTextSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #00efeb;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    width: 60%;
  }
`;

const StyledProductSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #fff;
  .product__wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: end;
    .product-image {
      grid-row: 2;
      grid-column: 2 / span 1;
      align-self: end;
      justify-self: end;
      max-width: 100%;
    }
    p {
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 8px 0;
    }
    .product__text__left {
      display: grid;
      grid-column: 1;
      text-align: right;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .product__text__right {
      display: grid;
      grid-column: 3;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .ghost {
      display: none;
      transform: translateX(8%);
    }
    .product1 img {
      width: 60%;
      margin: auto;
    }
    .product2 img {
      width: 40%;
      margin: auto;
    }
    .product3 img {
      width: 40%;
      margin: auto;
    }
  }
`;

function ProductSection() {
  const textSectionTriggerRef = useRef();
  const productSectionTriggerRef = useRef();
  const productWrapperRef = useRef();
  const boxTextRef = useRef();
  const boxRef = useRef();
  const nightCreamRef = useRef();
  const dayCreamRef = useRef();
  const nightAndDayCreamTextRef = useRef();

  return (
    <>
      <StyledTextSection ref={textSectionTriggerRef}>
        <p className="text__intro">
          I'm baby craft beer af salvia leggings readymade fashion axe. Portland
          authentic cliche thundercats pickled, distillery trust fund cornhole
          hell of keytar +1 man braid deep v. Mustache fanny pack single-origin
          coffee, banh mi bespoke slow-carb migas flannel yuccie enamel pin.
        </p>
      </StyledTextSection>
      <StyledProductSection ref={productSectionTriggerRef}>
        <div ref={productWrapperRef} className="product__wrapper">
          <div ref={boxTextRef} className="product__text__left">
            <p>CLEAN & PURE</p>
            <p>Cleaning foam</p>
          </div>
          <div ref={boxRef} className="product-image product1">
            <img className="product1-img-behind" alt="" src={box} />
          </div>
          <div ref={nightCreamRef} className="product-image product2">
            <img alt="" src={nightCream} />
          </div>
          <div ref={dayCreamRef} className="product-image product3 ghost">
            <img alt="" src={dayCream} />
          </div>
          <div ref={nightAndDayCreamTextRef} className="product__text__right">
            <p>REPAIRING</p>
            <p>Foam cleaner</p>
          </div>
        </div>
      </StyledProductSection>
    </>
  );
}

export default ProductSection;
