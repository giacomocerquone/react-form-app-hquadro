import React, { ChangeEvent, useState } from "react";
import "./App.css";
import MyInput from "./components/atoms/MyInput";
import NavBarTemplate from "./components/templates/NavBarTemplate";

function App() {
  const [{ name, surname, address }, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Quando dovete ricreare un nuovo stato basandovi sul vecchio
    // utilizzate la seguente sintassi
    setFormData((oldFormData) => ({
      ...oldFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <NavBarTemplate>
      <MyInput name="name" value={name} onChange={onChange} />
      <MyInput name="surname" value={surname} onChange={onChange} />
      <MyInput name="address" value={address} onChange={onChange} />
    </NavBarTemplate>
  );
}

export default App;
