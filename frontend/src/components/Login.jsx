import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [loggedMessage, setLoggedMessage] = useState("");
  useEffect(() => {
    setLogged(true);
  }, [logged]);
  const navigate = useNavigate();
  function redirector() {
    navigate("/notes", { state: { logged: { logged }, name: { name } } });
  }
  async function loginUser() {
    var response = "";
    try {
      response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });
    } catch (e) {
      setLoggedMessage("Failed to connect to server! Server seems offline.");
      const doc = document.querySelector(".messager");
      doc.style.setProperty("display", "block");
    }

    const data = await response.json();
    if (data.status != "error") {
      setLoggedMessage(data.msg);
      const status = true;
      setLogged(status);
      {
        redirector();
      }
    } else {
      setLoggedMessage(data.msg);
    }
  }
  return (
    <div className="form-main">
      <Form onSubmit={loginUser}>
        <Header>
          <NavLink to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/860/860790.png" />
            Login
          </NavLink>
        </Header>
        <input
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonGroup>
          <NavLink to="/signup">
            <Button>Register</Button>
          </NavLink>
          <Button onClick={loginUser} type="submit">
            Login
          </Button>
        </ButtonGroup>
        <Messager className="messager">{loggedMessage}</Messager>
      </Form>
    </div>
  );
}

const Header = styled.h1`
  * {
    text-decoration: none;
    color: white;
  }
  text-align: center;
  color: white;
  img {
    width: 18px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(77deg)
      brightness(100%) contrast(103%);
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: auto;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    padding: 10px;
    margin: 5px;
    background-color: black;
    color: white;
    height: 200px;
    width: 250px;
  }
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
const Messager = styled.div`
  display: none;
  color: white;
`;
const ButtonGroup = styled.div``;
export default Login;
