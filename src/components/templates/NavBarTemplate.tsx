import React, { FunctionComponent } from "react";
import NavBar from "../organisms/NavBar";

const NavBarTemplate: FunctionComponent = ({ children }) => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <header className="App-header">{children}</header>
    </div>
  );
};

export default NavBarTemplate;
