import React from 'react'
import styled from "styled-components";
const Wrapper = styled.div`

text-align:center;
color:black;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  h6 {
    animation: App-logo-spin infinite 20s linear;
  }
  .label {
  --border: dodgerblue;
  --bgLabel:;
  --bgInput:white;
  --color-light: dodgerblue;
  --color-light-a: dodgerblue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content;
  background: var(--bgLabel);
  position: relative;
  font-size: .65rem;
  transition: all .3s ease-out;
  margin-top:40px;
  cursor:pointer;
}

.label > .label-title {
  border: 1px solid var(--color-light);
  color: var(--color-light);
  box-shadow: 0 2px 2px gray;
  padding: .25em .5em;
  background-color: var(--bgInput);
  grid-column: 1/span 1;
  grid-row: 1/span 1;
  position: relative;
  border-radius: 4px;
  translate: 10px -10px;
  transition: all .5s ease-out .5s;
  z-index: 10;
}

.label:focus .input,
.label:focus-within .input {
  background-color: var(--bgInput);
  padding: 1em;
  color: var(--color-light);
  border: 2px solid var(--color-light);
  outline: 2px solid var(--color-light);
  outline-offset: -2px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(98, 0, 255, .25), 0 -5px 20px rgba(98, 0, 255,.1);
  scale: 1.15;
  transition: all .5s cubic-bezier(0,1.46,1,1.62) .3s;
}

.label:focus,
.label:focus-within .label-title {
  translate: 10px -20px;
  border-radius: 4px 4px 0 0;
  z-index: 0;
  transition: all .3s cubic-bezier(0,1.46,1,1.62);
}

.input {
  appearance: none;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid var(--color-light);
  border-left: 2px solid transparent;
  background-color: var(--bgInput);
  caret-color: var(--color-light);
  min-width: 400px;
  padding: 1.25em 1em .25em;
  outline: 0px solid var(--color-light);
  grid-column: 1/-1;
  grid-row: 1 / -1;
  position: relative;
  transition: all .3s cubic-bezier(.5,.6,.5,.62);
  z-index: 0;
  @media (max-width: 989px) {
    min-width: 100%;
  }
}

.input, 
.input::placeholder {
  color: var(--color-light-a);
}

  .banner {
  

  
    color:black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0  80px  0 0;
    flex-direction: row;
    
    text-align: center;
  }
  
  p{
    margin-bottom:30px;
  }
  .left{
    h2{
      text-align:left;
    }
  }
 
  button {
 font-size: 17px;
 padding: 0.5em 2em;
 border: transparent;
 box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
 background: dodgerblue;
 color: white;
 border-radius: 17px;
 cursor:pointer;
 float:left;
 margin-top:30px;
}

button:hover {
 background: rgb(2,0,36);
 background: linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%);
}

button:active {
 transform: translate(0em, 0.2em);
}
  .ze{
    color:gray;
    float:right;
    margin-top:10px;
    cursor:pointer;
  }
  span{
    color:dodgerblue;
  }
  .right{
  margin-top:100px;
   box-shadow:blue;
    h1{
      margin-bottom:-20px;
  font-size:32px;
}
  }
  img{
    height:400px;
    width:100%;
  }
  .Form{
    display:flex;
    
  }
`;
function Know() {
  return (
    <Wrapper>
    <div className="banner">
    <h1>
        Get <span>Solutions </span> With Our Instructors{" "}
        </h1>
      <div className="right">
        <img src="./ku.jpeg" />
      </div>
      <div className="left">
      <p>Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.</p>
        <div className="Form">
          <label for="myInput" class="label">
            <input
              id="myInput"
              class="input"
              name="text"
              placeholder="Username"
              type="text"
            />
          </label>
          <label for="myInput" class="label">
            <input
              id="myInput"
              class="input"
              name="text"
              placeholder="Email Adress"
              type="text"
            />
          </label>
          <label for="myInput" class="label">
            <input
              id="myInput"
              class="input"
              name="text"
              placeholder="Subject"
              type="text"
            />
          </label>
 <button> Button</button>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

export default Know
