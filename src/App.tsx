import React, { useRef } from "react";
import "./App.css";
import NavBarTemplate from "./components/templates/NavBarTemplate";

function App() {
  const inputRef = useRef<any>();
  const textRef = useRef<any>();

  const onClick = () => {
    inputRef.current?.focus();
  };

  const onSubmit = () => {
    console.log(textRef.current?.value);
  };

  return (
    <NavBarTemplate>
      <p>It works</p>

      <input type="file" hidden ref={inputRef} />
      <button onClick={onClick}>Upload a file</button>

      <input type="text" ref={textRef} />
      <button onClick={onSubmit}>Submit</button>
    </NavBarTemplate>
  );
}

export default App;
