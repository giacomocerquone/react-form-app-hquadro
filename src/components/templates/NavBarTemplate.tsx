import React from "react";
import NavBar from "../organisms/NavBar";

const NavBarTemplate = ({ children }: { children: any }) => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">{children}</header>
    </div>
  );
};

export default NavBarTemplate;
