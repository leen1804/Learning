import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  padding: 90px;
  padding-left: 180px;

  .flex {
    display: flex;
  }
  .right {
    width: 50%;
  }
  .left {
    width: 50%;
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

  .one-div {
    background: rgba(77, 77, 77, 0.39);
    width: 250px;
    height: 300px;
    border-radius: 1rem;
    position: relative;
    font-size: large;
    -webkit-perspective: 600px;
    perspective: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transform: rotateX(-95deg) rotateY(-95deg);
    transform: rotateX(-15deg) rotateY(-35deg);
    -webkit-box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      0rem 5rem 25px 10px rgba(0, 0, 0, 0.11);
    box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      0rem 5rem 25px 10px rgba(0, 0, 0, 0.11);
    border: dashed 2px rgba(71, 71, 71, 0.425);
    -webkit-transition: 0.6s ease-in-out;
    transition: 0.6s ease-in-out;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .one-div:hover {
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
    -webkit-transform: translateY(-15px) translateX(15px) rotateX(-15deg)
      rotateY(-35deg);
    transform: translateY(-15px) translateX(15px) rotateX(-15deg)
      rotateY(-35deg);
    background: repeating-linear-gradient(
      45deg,
      #608bbc10,
      #6097bc10 5px,
      #466c9810 5px,
      #46679810 15px
    );
    border: dashed 2px rgba(0, 140, 255, 0.13);
    -webkit-box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      -1rem 5rem 25px 20px rgba(0, 0, 0, 0.089);
    box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      -1rem 5rem 25px 20px rgba(0, 0, 0, 0.089);
  }

  .one-div::before {
    pointer-events: none;
    /* no. */
    content: "";
    white-space: pre-wrap;
    padding: 20px;
    background: rgba(58, 58, 58, 0.39);
    width: 210px;
    height: 260px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-items: center;
    font-weight: 100;
    border-radius: 1rem;
    position: absolute;
    text-align: center;
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.288) 0 0 2rem;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
    -webkit-transform: translateY(10px) translateX(-10px);
    -ms-transform: translateY(10px) translateX(-10px);
    transform: translateY(10px) translateX(-10px);
    -webkit-box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 12px;
    box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 12px;
    border: solid 1px rgba(71, 71, 71, 0.425);
  }

  .one-div::after {
    pointer-events: none;
    content: "";
    white-space: pre-wrap;
    font-family: monospace;
    text-align: end;
    line-height: 1px;
    word-spacing: -2rem;

    background: rgba(68, 68, 68, 0.39);
    width: 250px;
    height: 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-items: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-radius: 1rem;
    position: absolute;
    color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: rgba(255, 255, 255, 0) 4px -4px 0px;
    box-shadow: rgba(255, 255, 255, 0) 4px -4px 0px;
    border: solid 1px rgba(71, 71, 71, 0.425);
    z-index: 20;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    -webkit-transition-delay: 0.08s;
    transition-delay: 0.08s;
    -webkit-transform: translateY(20px) translateX(-20px);
    -ms-transform: translateY(20px) translateX(-20px);
    transform: translateY(20px) translateX(-20px);
  }

  .one-div:hover::before {
    height: 200px;
    -webkit-transform: translateY(20px) translateX(-20px);
    -ms-transform: translateY(20px) translateX(-20px);
    transform: translateY(20px) translateX(-20px);
    background: rgba(95, 77, 75, 0.466);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: rgba(255, 255, 255, 0);
    -webkit-transition: 0.8s cubic-bezier(0.87, 0, 0.13, 1);
    transition: 0.8s cubic-bezier(0.87, 0, 0.13, 1);
    text-shadow: rgba(255, 255, 255, 0) 0 0 2rem;
    border: solid 1px rgba(95, 77, 75, 0.466);
  }

  .one-div:hover::after {
    color: rgb(224, 224, 224);
    line-height: 15px;
    word-spacing: 0rem;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    height: 180px;
    -webkit-transform: translateY(40px) translateX(-40px);
    -ms-transform: translateY(40px) translateX(-40px);
    transform: translateY(40px) translateX(-40px);
    background-color: rgba(95, 91, 75, 0.377);
    border: solid 1px rgba(95, 77, 75, 0.466);
    -webkit-transition: 0.8s cubic-bezier(0.87, 0, 0.13, 1);
    transition: 0.8s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .one-div:active {
    cursor: wait;
    height: 250px;
    -webkit-transition: 0.6s ease-in-out;
    transition: 0.6s ease-in-out;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
    -webkit-box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      -1rem 7rem 25px 40px rgba(0, 0, 0, 0.068);
    box-shadow: rgba(0, 0, 0, 0.103) 4px -4px 18px,
      -1rem 7rem 25px 40px rgba(0, 0, 0, 0.068);
    border: dashed 2px rgba(43, 170, 255, 0.507);
  }
  .one-div:active::before {
    height: 210px;
    -webkit-transform: translateY(60px) translateX(-60px);
    -ms-transform: translateY(60px) translateX(-60px);
    transform: translateY(60px) translateX(-60px);
    border: solid 1px rgba(255, 92, 70, 0.466);
    backdrop-filter: blur(2px);
  }

  .one-div:active::after {
    height: 250px;
    -webkit-transform: translateY(120px) translateX(-120px);
    -ms-transform: translateY(120px) translateX(-120px);
    transform: translateY(120px) translateX(-120px);
    border: solid 1px rgba(255, 187, 84, 0.432);
    letter-spacing: 0.8px;
    line-height: 18px;
    font-size: 1.2rem;
    backdrop-filter: blur(2px);
  }
 
`;
function About() {
  return (
    <Wrapper>
      <div className="flex">
        <div className="left">
          <div class="one-div"></div>
        </div>
        <div className="right">
          <h1>Welcome to Girls In Stem Trust learning platform</h1>
          <p>
            "Our STEM learning platform aims to provide an interactive and
            engaging online environment for students to explore science,
            technology, engineering, and mathematics subjects. .
          </p>
          <p>
            Leveraging modern web technologies, the platform offers a diverse
            range of courses covering coding (including Scratch), robotics,
            chemistry, biology, physics, and mathematics
          </p>
          <Link to="/about">
        <button>About more</button>
      </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
