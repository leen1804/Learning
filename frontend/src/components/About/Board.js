import React from "react";
import styled from "styled-components";
import { TiTickOutline } from "react-icons/ti";

const Wrapper = styled.div`
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px 60px 100px;
    color: black;

    text-align: left;
  }
  h1 {
    color: black;
    font-size: 35px;
  }
  h2 {
    font-size: 42px;
  }
  .be {
    display: flex;
    flex-direction:column;
    gap: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
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
  span {
    color: dodgerblue;
  }
`;
function Board() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="left">
          <h1>
            Online Learning Courses 
          </h1>
          <h1>
           Designed For <span>Real Life</span>
          </h1>
          <p>Synergistically integrate orthogonal synergy rather than visionary expertise. Credibly supply bleeding-edge deliverables after robust action items generate principle centered

</p>
          <div className="be">
            <p>
              {" "}
              <TiTickOutline />
              Easy Online Learning Platform
            </p>
            <p>
              {" "}
              <TiTickOutline />
              98% Course Completitation Rates
            </p>
            <p>
              {" "}
              <TiTickOutline />
              Friendly Enviroments 
            </p>
          </div>
          <div className="bu">
            <button>Explore Our Courses</button>
          
          </div>
        </div>

        <div className="zu">
          <img src="./ho.png" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Board;
