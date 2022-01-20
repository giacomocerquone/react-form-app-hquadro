import React, { FunctionComponent } from "react";

const AppContainer: FunctionComponent = ({ children }) => {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
};

export default AppContainer;
