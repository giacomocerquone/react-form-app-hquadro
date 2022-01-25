import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/users">Users</Link> <Link to="/users/1">User 1</Link>
        </div>

        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { id: 1, name: "Giacomo" },
            { id: 2, name: "Giovanni" },
            { id: 3, name: "Emanuele" },
          ].map((user) => (
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          ))}
        </div> */}

        <Routes>
          {/* <Redirect from="/home" to="/" /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<User />} />

          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
