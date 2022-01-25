import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../actions/fetchUserById";
import { useUser } from "../context/UserContext";
import { setName } from "../slices/user";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(fetchUserById(1));

    dispatch(setName("NuovoNome"));
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
