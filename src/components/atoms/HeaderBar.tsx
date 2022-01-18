import React, { FunctionComponent } from "react";
import { useUser } from "../contexts/userContext";

const HeaderBar: FunctionComponent = () => {
  const [state, setState] = useUser();

  return <p>{state?.name}</p>;
};

export default HeaderBar;
