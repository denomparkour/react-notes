import React from "react";
import styled from "styled-components";
function NoteComp({ title, data }) {
  return (
    <>
      <Body>
        <h3>{title}</h3>
        <hr />
        <p>{data}</p>
      </Body>
    </>
  );
}
const Body = styled.div`
  background-color: #303030;
  min-height: 75px;
  width: 100%;
  display: container;
  box-shadow: inset 0 -0.25em 0 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  color: white;
  word-wrap: break-word;
  h3 {
    padding-top: 10px;
    text-align: center;
  }
  hr {
    max-width: 95%;
  }
  p {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    line-height: 25px;
  }
`;
export default NoteComp;
