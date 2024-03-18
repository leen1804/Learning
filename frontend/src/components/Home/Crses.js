import React from "react";
import styled from "styled-components";
import { SlChemistry } from "react-icons/sl";
import { GiRobotGrab } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";

const Wrapper = styled.div`
  .ca {
    padding: 90px;
  }
  .card {
    width: 300px;
    height: 120px;
    transition: all 0.5s;
    box-shadow: 9px 9px 9px rgba(25, 25, 25, 0.11),
      -9px -9px 9px rgba(60, 60, 60, 0.082);
    text-align: center;
    overflow: hidden;
  }

  .card:hover {
    height: 260px;
    background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
  }

  .card .header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212121;
    margin-bottom: 16px;
  }

  .card .header .img-box {
    width: 50px;
  }

  .card .header .title {
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 900;
    text-transform: uppercase;
    padding: 4px 0 14px 0;
    transition: all 0.5s;
    color: #edededc5;
  }

  .card:hover .header {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
  }

  .card:hover .card .header .title {
    padding: 0;
  }

  .card .content {
    display: block;
    text-align: left;
    color: #212121;
    margin: 0 18px;
  }

  .card .content p {
    transition: all 0.5s;
    font-size: 0.8em;
    margin-bottom: 8px;
  }

  .card .content a {
    color: #1d8122;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .card .content .btn-link:hover {
    border-bottom: 1px solid #1d8122;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    height: 50vh;
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
  span {
    color: dodgerblue;
  }
  h1 {
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 70px;
  }
  svg {
    font-size: 50px;
    color: white;
  }
`;
export default function Crses() {
  return (
    <Wrapper>
      <div className="ca">
        <h1>
          OUR POPULAR <span>COURSES</span>
        </h1>
        <div class="cards">
          <div class="card">
            <div class="header">
              <div class="img-box">
                <GiRobotGrab />
              </div>
              <span class="title">Robotics</span>
            </div>

            <div class="content">
              <p>
              The Best Math book ever

              </p>

              <a class="btn-link">Read More...</a>
            </div>
          </div>

          <div class="card">
            <div class="header">
              <div class="img-box">
                <SlChemistry />
              </div>
              <span class="title">Chemistry</span>
            </div>

            <div class="content">
              <p>THe best chemistry book ever</p>

              <a class="btn-link">Read More...</a>
            </div>
          </div>

          <div class="card">
            <div class="header">
              <div class="img-box">
                <TbMathSymbols />
              </div>
              <span class="title">Maths</span>
            </div>

            <div class="content">
              <p>
                Best Math book ever
              </p>

              <a class="btn-link">Read More...</a>
            </div>
          </div>
        </div>
        <button> View all Courses</button>
      </div>
    </Wrapper>
  );
}
