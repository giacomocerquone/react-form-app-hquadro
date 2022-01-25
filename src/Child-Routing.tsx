import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";

const Users = () => {
  return (
    <>
      <Link to="/users/1">Giacomo</Link>
      <p>Giovanni</p>
      <p>Raffaele</p>
      <Routes>
        <Route path=":id" element={<User />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div>
          <NavLink
            style={({isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "normal",
              };
            }}
            to="/home"
          >
            Home
          </NavLink>{" "}
          <NavLink to="/about">About</NavLink>{" "}
          <NavLink to="/users">Users</NavLink>{" "}
          <NavLink to="/users/1">User 1</NavLink>
        </div>

        <Routes>
          {/* <Redirect from="/home" to="/" /> REACT ROUTER V.5 */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />

          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
