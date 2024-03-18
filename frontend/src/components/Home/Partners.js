// Partners.js
import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.div`
  text-align: center;
  
  h1 {
    font-size: 50px;
    color: #333;
  }
  
  span {
    color: dodgerblue;
  }
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const PartnerSlide = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  
  .carousel-caption {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
  }
`;

const Partners = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <Wrapper>
      <h1>Our Trusted <span>Partners</span></h1>
      <CarouselWrapper>
        <Slider {...settings}>
          {slides && slides.map((slide, index) => (
            <PartnerSlide key={index}>
              <img src={slide.imageUrl} alt={slide.altText} />
              
            </PartnerSlide>
          ))}
        </Slider>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default Partners;
