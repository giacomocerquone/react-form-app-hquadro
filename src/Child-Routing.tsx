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

        <Routes>
          {/* <Redirect from="/home" to="/" /> REACT ROUTER V.5 */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/users/*"
            element={
              <>
                <p>This is users</p>
                <Routes>
                  <Route path=":id" element={<User />} />
                </Routes>
              </>
            }
          ></Route>

          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
