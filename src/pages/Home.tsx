import React from "react";
import { useUser } from "../context/UserContext";

const Home = () => {
  const [store] = useUser();

  console.log("FROM HOME", store);

  return (
    <div>
      <p>This is Home</p>
    </div>
  );
};

export default Home;
