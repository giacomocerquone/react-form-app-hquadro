import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

const MyComponent = () => {
  const myStore = useSelector((state) => state);

  console.log(myStore)

  return <p>mycomponent</p>
};

const App = () => {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
};

export default App;
