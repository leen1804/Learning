import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .banner {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url(./leno.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 80px 0 100px;
    color: white;
    height: 86vh;

    text-align: center;
    h1 {
      margin-top: -20px;
      margin-left: 20px;
      font-size: 50px;
    }
  }
  span {
    color: dodgerblue;
  }
`;
function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <h1>
          LEARN <span>BEST</span> ONLINE COURSES
        </h1>
      </div>
    </Wrapper>
  );
}

export default Banner;
