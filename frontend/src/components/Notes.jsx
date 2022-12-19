import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/react.svg";
import Note from "./Note";
function Notes() {
  const location = useLocation();
  const [viewPort, setViewPort] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(0);
  try {
    if (location.state.logged.logged) {
      useEffect(() => {
        setViewPort(true);
        setName(location.state.name.name);
      }, []);
      useEffect(() => {
        fetcher();
      }, [temp, name]);
    }
  } catch (err) {
    console.log(err);
  }
  function createFunc() {
    const dataPanel = document.querySelector(".data-input");
    if (dataPanel.style.display == "") {
      dataPanel.style.setProperty("display", "block");
    } else if (dataPanel.style.display == "block") {
      dataPanel.style.setProperty("display", "none");
    } else {
      dataPanel.style.setProperty("display", "block");
    }
    setTemp(temp + 1);
  }
  async function addFunc() {
    const response = await fetch(
      "https://parkour-react-notes-server.herokuapp.com/api/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          title,
          description,
        }),
      }
    );
    const data = await response.json();
    if (data.status == "ok") {
      alert(data.msg);
    } else {
      alert(data.msg);
    }
  }
  async function fetcher() {
    const response = await fetch(
      "https://parkour-react-notes-server.herokuapp.com/api/fetch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      }
    );
    const data = await response.json();
    setData(data);
  }
  return (
    <>
      {viewPort ? (
        <>
          <NavBar>
            <Logo src={logo} />
            <span className="logo-title">React Notes</span>
            <Name>Hello {name}!</Name>
          </NavBar>
          <Create onClick={() => createFunc()}>Create</Create>
          {Array.isArray(data) ? (
            data.map((i) => (
              <Note key={i._id} title={i.title} data={i.description} />
            ))
          ) : (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Note
                title="Welcome Crasher!"
                data="You are here because you might have entered to /Notes while there is an error or unlogical visit!. So you are requested to go home and login back :)"
              />
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            </div>
          )}
        </>
      ) : (
        <NotLogged>
          Not Authorized to visit!
          <br />
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </NotLogged>
      )}
      <DataInput className="data-input">
        <h3>
          Enter your New Note{" "}
          <CloseButton onClick={() => createFunc()}>X</CloseButton>
        </h3>
        <input
          className="input--title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input--description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button onClick={() => addFunc()}>Add</Button>
      </DataInput>
    </>
  );
}

export default Notes;

const NotLogged = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Button = styled.button`
  background-color: transparent;
  padding: 12px;
  margin: 15px;
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
const NavBar = styled.div`
  height: 75px;
  width: auto;
  display: flex;
  background-color: #303030;
  color: white;
  border-radius: 5px;
  align-items: center;
  word-wrap: word;
`;

const Logo = styled.img`
  width: 60px;
  padding: 10px;
`;
const Name = styled.div`
  left: 100%;
  margin-left: auto;
  padding: 10px;
`;
const Create = styled.button`
  background-color: #0954e8;
  padding: 5px;
  border-radius: 4px;
  align-items: center;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const DataInput = styled.div`
  display: none;
  background-color: #242424;
  min-width: 300px;
  width: auto;
  color: white;
  padding: 5px;
  text-align: center;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.31);

  transform: translate(-50%, -50%);
  input {
    padding: 10px;
    margin: 5px;
    background-color: black;
    color: white;
    height: 10px;
    width: 250px;
  }
`;
const CloseButton = styled.button`
  color: red;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
`;
