import React from "react";
import "./App.css";
import HeaderBar from "./components/atoms/HeaderBar";
import { UserProvider } from "./components/contexts/userContext";
import NavBarTemplate from "./components/templates/NavBarTemplate";

function App() {
  return (
    <NavBarTemplate>
      <UserProvider>
        <HeaderBar />
        <p>It works</p>
      </UserProvider>
    </NavBarTemplate>
  );
}

export default App;
