import { ActivityItem } from "@fluentui/react";
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { client } from "./utils/client";

const Loader = () => {
  const isLoading = useSelector((state: any) => state.ui.loaderActive);
  console.log(isLoading);

  return isLoading && <ActivityItem />;
};

const App = () => {
  useEffect(() => {
    (async () => {
      const res = await client.get("/todos");

      console.log(res);
    })();
  }, []);

  return (
    <Provider store={store}>
      <Loader />
    </Provider>
  );
};

export default App;
