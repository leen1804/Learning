import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../assets/STEM.png";
import { NavLink, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  @media (min-width: 990px) {
  }
  .header {
    background: #4a5af9;

    width: 100%;
    @media (min-width: 990px) {
      background: white;

      position: absolute;

      width: 80%;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      margin-top: 50px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    &.scrolled {
      background: yellow; // Change this to the desired color
      transition: background 0.3s ease-in-out;
    }
  }
  /* padding: 10px; */
  background: white;

  img {
    width: 10%;
    display: flex;
    justify-content: flex-start;
    /* text-align:center;
    align-items:center; */
    margin: 0 auto;
    margin-left: 9%;
    z-index: 4;

    @media (min-width: 992px) {
      width: 20%;
    }
    @media (min-width: 1000px) {
      width: 13%;
      margin-left: 30px;
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    max-height: 0;
    top: 0%;
    transition: all 0.4s ease-out;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background: rgb(74, 90, 249);

    @media (min-width: 1000px) {
      justify-content: flex-end;
      max-height: 100%;
      top: 18%;
      margin-right: 30px;
    }

    .leen {
      display: inline-block;
      padding: 15px 22px;
      background-color: rgb(74, 90, 249);
      color: white;
      text-decoration: none;
      border: 2px solid rgb(74, 90, 249);
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s, opacity 0.3s;
      a {
        color: white;
      }
    }

    .leen:hover {
      background-color: transparent;
      color: black;
    }

    .a {
      padding: 29px;

      font-size: 17px;
      color: white;
      font-weight: 600;
      line-height: 14px;

      a:hover {
        color: dodgerblue;
      }
      @media (max-width: 1215px) {
        font-size: 12px;
      }
    }

    @media (min-width: 992px) {
      position: relative;
      max-height: unset;
      top: 0%;
      flex-direction: row;
      background: transparent;
      height: unset;
    }

    li a {
      color: black;
      text-decoration: none;
    }
  }
  .hamburger {
    padding: 20px 20px 33px 30px;
    position: relative;
    z-index: 4;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    img {
    }
    .hamburger {
      padding: 50px 60px 55px 35px;
    }
  }
  @media (min-width: 990px) {
    .hamburger {
      display: none;
    }
  }
  span {
    width: 30px;
    height: 3px;
    background: #01ffff;
    position: absolute;
    border-radius: 7px;
    transition: transform 0.3s;
    &:before {
      width: 100%;
      height: 100%;
      background: #01ffff;
      border-radius: 10px;
      position: absolute;
      top: -7px;
      content: "";
      transition: all 0.3s ease-out;
    }
    &:after {
      width: 100%;
      height: 100%;
      background: #01ffff;
      border-radius: 10px;
      position: absolute;
      top: 7px;
      content: "";
      transition: all 0.3s ease-out;
    }
  }
  .open {
    span {
      background: transparent;
      &:before {
        top: 0;
        transform: rotate(495deg);
      }
      &:after {
        top: 0;
        transform: rotate(-495deg);
      }
    }
  }
  .change {
    max-height: 91%;
  }

  .white-link a {
    color: white;
    a:hover {
      color: gray;
    }
  }
  ul .white-linky a {
    color: rgb(74, 90, 249);
    display: inline-block;
    padding: 8px 13px;
    background-color: white;

    text-decoration: none;

    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s, opacity 0.3s;
  }
  .up {
    background-color: dodgerblue;
    color: white;
    display: flex;
    justify-content: center;
    height: 14.5vh;
  }
  .flex {
    @media (min-width: 990px) {
    }
  }
`;

function Header() {
  const [checked, setChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [zIndex, setZIndex] = useState(4);
  const location = useLocation();
  const isDonatePage = location.pathname === "/Donate";
  const whiteLinkPages = ["/OurStory", "/HireUs"];

  const isWhiteLinkPage = whiteLinkPages.includes(location.pathname);

  useEffect(() => {
    if (isDonatePage && window.innerWidth >= 1200) {
      setZIndex(9);
    } else {
      setZIndex(4);
    }
  }, [isDonatePage]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setChecked(false);
  };

  return (
    <Wrapper className={`wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="up">
        <div className="flex"></div>
        <div className="header" style={{ zIndex: zIndex }}>
          <img src={image1} className="logo" alt="" />

          <div
            className={checked ? "hamburger open" : "hamburger"}
            onClick={() => setChecked(!checked)}
          >
            <span></span>
          </div>
          <ul className={checked ? "menu change" : "menu"}>
            <li className={`a ${isWhiteLinkPage ? "white-link" : ""}`}>
              <NavLink
                className="nav-link"
                to="/"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Log In</a>
              </NavLink>
            </li>
            <li className={`a ${isWhiteLinkPage ? "white-link" : ""}`}>
              <NavLink
                className="nav-link"
                to="/home"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Home</a>
              </NavLink>
            </li>
            <li className={`a ${isWhiteLinkPage ? "white-link" : ""}`}>
              <NavLink
                className="nav-link"
                to="/InnovationHubs"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Courses</a>
              </NavLink>
            </li>
            <li className={`a ${isWhiteLinkPage ? "white-link" : ""}`}>
              <NavLink
                className="nav-link"
                to="/HireUs"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Contact</a>
              </NavLink>
            </li>
            {/* <li className={`leen ${isWhiteLinkPage ? "white-linky" : ""}`}>
            <NavLink
              className="nav-link"
              to="/Donate"
              exact
              onClick={handleLinkClick}
            >
              <a href="">Donate</a>
            </NavLink>
          </li> */}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
