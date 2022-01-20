import React from "react";
import "./App.css";
import styled, { css } from "styled-components";


const MyDiv = styled.div``;

const Container = styled(MyDiv)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  & > div {
    background: black;
  }
`;

function App() {
  return (
    <Container>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 py-8 text-gray-700 text-sm font-bold mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-2">Username</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              placeholder="Username"
              type="text"
              id="username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              placeholder="Password"
              type="password"
              id="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Forgot password
            </a>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs">@awesome app copy</p>
      </div>
    </Container>
  );
}

export default App;
