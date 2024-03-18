import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80vh;
  text-align: center;
  color: black;

  .label {
    --border: dodgerblue;
    --bgInput: white;
    --color-light: dodgerblue;
    --color-light-a: dodgerblue;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    background: var(--bgLabel);
    position: relative;
    font-size: 0.65rem;
    transition: all 0.3s ease-out;
    margin-top: 40px;
    cursor: pointer;
  }

  .label > .label-title {
    border: 1px solid var(--color-light);
    color: var(--color-light);
    box-shadow: 0 2px 2px gray;
    padding: 0.25em 0.5em;
    background-color: var(--bgInput);
    grid-column: 1/span 1;
    grid-row: 1/span 1;
    position: relative;
    border-radius: 4px;
    translate: 10px -10px;
    transition: all 0.5s ease-out 0.5s;
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
    box-shadow: 0 5px 10px rgba(98, 0, 255, 0.25),
      0 -5px 20px rgba(98, 0, 255, 0.1);
    scale: 1.15;
    transition: all 0.5s cubic-bezier(0, 1.46, 1, 1.62) 0.3s;
  }

  .label:focus,
  .label:focus-within .label-title {
    translate: 10px -20px;
    border-radius: 4px 4px 0 0;
    z-index: 0;
    transition: all 0.3s cubic-bezier(0, 1.46, 1, 1.62);
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
    padding: 1.25em 1em 0.25em;
    outline: 0px solid var(--color-light);
    grid-column: 1/-1;
    grid-row: 1 / -1;
    position: relative;
    transition: all 0.3s cubic-bezier(0.5, 0.6, 0.5, 0.62);
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
    url(./login.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px 0 100px;
    flex-direction: row;
    text-align: center;
  }

  p {
    margin-bottom: 30px;
  }

  .left {
    h2 {
      text-align: left;
    }
  }

  button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: dodgerblue;
    color: white;
    border-radius: 17px;
    cursor: pointer;
    margin-top: 30px;
    margin-right: 159px;
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

  .ze {
    color: gray;
    float: right;
    margin-top: 10px;
    cursor: pointer;
  }

  span {
    color: dodgerblue;
  }

  .right {
    margin-top: 100px;
    box-shadow: blue;
    h1 {
      margin-bottom: -20px;
      font-size: 32px;
    }
  }

  .yo {
    text-align: left;
    margin-top: 10px;
    color: dodgerblue;
    text-decoration: underline solid dodgerblue;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation, replace with your actual validation logic
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Example login request to backend
    fetch("http://localhost:8000/api/login", {  // Change the URL to your Django backend's login endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password");
        }
        return response.json();
      })
      .then((data) => {
        // Store the token in localStorage or sessionStorage
        // Example: localStorage.setItem("token", data.token);
        // Redirect to the home page or do something else based on successful login
        window.location.href = "/home";
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Wrapper>
      <div className="banner">
        <div className="left">
          <h2>Login into your account</h2>
          <div className="yo">
            <a> Don't have an account?</a>
          </div>
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className="label">
                <input
                  id="username"
                  className="input"
                  name="text"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label htmlFor="password" className="label">
                <input
                  id="password"
                  className="input"
                  name="text"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {error && <p className="error">{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div className="right">
          <h1>
            GIRLS IN STEM ONLINE <span>LEARNING</span>{" "}
          </h1>
          <img src="./leen.png" alt="STEM Learning" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;