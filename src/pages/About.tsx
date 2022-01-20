import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const About = () => {
  const [store, setState] = useUser();
  const navigate = useNavigate();

  console.log("FROM ABOUT", store);

  const onClick = () => {
    setState({
      birthdate: "11111111",
    });
    navigate("/home");
  };

  return (
    <>
      <p>This is about</p>
      <button onClick={onClick}>Vai alla home</button>
    </>
  );
};

export default About;
