import React from "react";
import logo from "../assets/react.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <NavBar>
        <Logo src={logo} />
        <span className="logo-title">React Notes</span>
      </NavBar>
      <Login>
        <img src={logo} />
        <br />
        <br />
        Simple Notes Application made using MERN STACK
        <br />
        <br />
        Hit Login to Proceed!
        <br />
        <br />
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
      </Login>
      <Footer>
        Made with ❤️ by{" "}
        <span>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </span>
        <a target="_blank" href="https://github.com/denomparkour">
          Denom Parkour
        </a>
      </Footer>
    </>
  );
}
const NavBar = styled.div`
  height: 75px;
  width: auto;
  display: flex;
  background-color: #303030;
  color: white;
  border-radius: 5px;
  align-items: center;
`;
const Logo = styled.img`
  width: 60px;
  padding: 10px;
`;
const Login = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: large;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  img {
    height: 100px;
    width: auto;
    justify-content: center;
    animation: rotation 10s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    NavLink {
      text-decoration: none;
      border: 20px;
      font-size: 100px;
    }
  }
`;
const Button = styled.button`
  background-color: transparent;
  padding: 12px;
  border-radius: 4px;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &: hover {
    background-color: #0954e8;
    transform: scale(1.1);
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 7px;
  width: 99%;
  color: white;
  height: 50px;
  background-color: #303030;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  img {
    width: 15px;
    margin-top: 2px;
  }
  a {
    text-decoration: none;
    text-styling: none;
  }
`;

export default Home;
