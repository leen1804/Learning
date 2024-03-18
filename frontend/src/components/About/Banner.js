import React from "react";
import styled from "styled-components";
import { TiTickOutline } from "react-icons/ti";

const Wrapper = styled.div`
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 80px 0 100px;
    color: black;

    text-align: left;
  }
  h1 {
    color: dodgerblue;
    font-size: 55px;
  }
  h2{
    font-size:42px;
  }
  .be {
    display: flex;
    gap: 15px;
    margin-top:30px;
    margin-bottom:30px;
  }
  button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: dodgerblue;
    color: white;
    cursor: pointer;
    border-radius: 15px;
  }

  button:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(30, 144, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  button:active {
    transform: translate(0em, 0.2em);
  }
  .bu {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="left">
          <h1>ONLINE LEARNING </h1>
          <h2>Feels Like Real </h2>
          <h2>Classroom</h2>
          <div className="be">
            <p>
              {" "}
              <TiTickOutline />
              Get certified
            </p>
            <p>
              {" "}
              <TiTickOutline />
              Gain Job-ready Skills
            </p>
            <p>
              {" "}
              <TiTickOutline />
              Great Life
            </p>
          </div>
          <div className="bu">
            <button>Get Started</button>
            <button>Our Courses</button>
          </div>
        </div>

        <div className="zu">
          <img src="./zue.png" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
