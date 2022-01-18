import React, { useState } from "react";
import "./App.css";
import useFetchTodos from "./components/hooks/useFetchTodos";
import NavBarTemplate from "./components/templates/NavBarTemplate";

function App() {
  const [mouseOnDiv, setMouseOnDiv] = useState(true);
  const { todos } = useFetchTodos({ mouseOnDiv });

  return (
    <NavBarTemplate>
      {todos === undefined && <p>Sto caricando</p>}
      <p>It works</p>

      <div
        id="mydiv"
        style={{
          width: 200,
          height: 200,
          border: "1px solid #fff",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        onMouseEnter={() => setMouseOnDiv(true)}
        onMouseOut={() => setMouseOnDiv(false)}
      >
        hover me
      </div>
    </NavBarTemplate>
  );
}

export default App;
