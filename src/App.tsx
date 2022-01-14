import React, { ChangeEvent, useReducer } from "react";
import "./App.css";
import MyInput from "./components/atoms/MyInput";
import NavBarTemplate from "./components/templates/NavBarTemplate";

const EDIT_FORM = "EDIT_FORM";

const initialValue = {
  name: "",
  surname: "",
  address: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case EDIT_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      value: e.target.value,
      name: e.target.name,
      type: EDIT_FORM,
    });
  };

  return (
    <NavBarTemplate>
      <MyInput name="name" value={state.name} onChange={onChange} />
      <MyInput name="surname" value={state.surname} onChange={onChange} />
      <MyInput name="address" value={state.address} onChange={onChange} />
    </NavBarTemplate>
  );
}

export default App;
