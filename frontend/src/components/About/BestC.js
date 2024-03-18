import React from "react";
import styled from "styled-components";
import { GrCertificate } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";

const Wrapper = styled.div`
  padding: 50px 80px 50px 80px;
  span {
    color: dodgerblue;
  }
  h1 {
    font-size: 45px;
  }
  .card {
    position: relative;
    width: 400px;
    height: 300px;
    background: linear-gradient(-45deg, aqua 0%, dodgerblue 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .card svg {
    font-size: 150px;
    color:white;
    
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: rotate(deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  
  }

  .card__content {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }
  .flex {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    margin-top: 50px;
  }
`;
function BestC() {
  return (
    <Wrapper>
      <h1>
        Online Education Tailored To <span>You</span>
      </h1>
      <div className="flex">
        <div class="card">
        <IoBookSharp />

          <div class="card__content">
            <p class="card__title">Choose Any Courses</p>
            <p class="card__description">
            Standards in leadership skills synergize optimal expertise rather than innovative leadership skills and better learning.
            </p>
          </div>
        </div>
        <div class="card">
         
          <FaPencil />
          <div class="card__content">
            <p class="card__title"> Start Learn</p>
            <p class="card__description">
            These programs cover a wide range of subjects and can be customized for individual learners or delivered to schools
            </p>
          </div>
        </div>
        <div class="card">
         
          <GrCertificate />
          <div class="card__content">
            <p class="card__title">Get a cerificate</p>
            <p class="card__description">
              Competently unleash competitive initiatives for alternative
              interfaces. Enthusiastically supply resource eveling platforms
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BestC;
