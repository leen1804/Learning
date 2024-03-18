import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  .caro {
    text-align: center;
  }
`;
const Testimonial = styled.div`
  max-width: 500px;
  background: dodgerblue;
  border-radius: 5px;
  color:white;
  margin:0 20px;
  padding:30px;

`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
function Testimonal() {
  const testimonials = [
    {
      name: "John Doe",
      avatarUrl: "./li.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt tellus quis nisi volutpat, quis ullamcorper nunc faucibus.",
    },
    {
      name: "Jane Smith",
      avatarUrl: "./li.jpg",
      comment:
        "Sed eu semper ipsum. Nulla facilisi. Nullam vitae ex vitae nunc suscipit rhoncus at sit amet erat.",
    },
    {
      name: "Alice Johnson",
      avatarUrl: "./li.jpg",
      comment:
        "Vivamus maximus, ligula id eleifend sollicitudin, metus sem feugiat nisi, nec laoreet odio ligula nec arcu.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Wrapper>
      <div className="caro">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <Avatar src={testimonial.avatarUrl} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.comment}</p>
            </Testimonial>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Testimonal;
