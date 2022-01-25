import React from "react";
import { useSelector } from "react-redux";
import { useUser } from "../context/UserContext";

interface IStore {
  user: {
    name?: string;
    birthdate?: string;
    surname?: string;
  };
}

const Home = () => {
  const userName = useSelector((state: IStore) => state.user.name);

  console.log(userName);

  return (
    <div>
      <p>This is Home</p>
    </div>
  );
};

export default Home;
