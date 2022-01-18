import { createContext, FunctionComponent, useContext, useState } from "react";

interface IUser {
  token: string;
  name: string;
  birthdate: string;
}

type TContext = [
  IUser | undefined,
  React.Dispatch<React.SetStateAction<IUser | undefined>>
];

const UserContext = createContext<TContext | undefined>(undefined);

export const UserProvider: FunctionComponent = ({ children }) => {
  const stateHandlers = useState<IUser | undefined>({
    token: "myToken",
    name: "myName",
    birthdate: "000000000000",
  });

  return (
    <UserContext.Provider value={stateHandlers}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const value = useContext(UserContext);

  if (value === undefined) {
    throw new Error(
      "make sure you're requesting the UserContext from within the UserProvider"
    );
  }

  return value;
};
