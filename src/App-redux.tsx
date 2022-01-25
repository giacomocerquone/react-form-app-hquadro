import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import store from "./store/store";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/users">Users</Link> <Link to="/users/1">User 1</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
