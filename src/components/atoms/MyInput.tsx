import React, { ChangeEvent, FunctionComponent } from "react";

const MyInput: FunctionComponent<Props> = ({ value, onChange, name }) => {
  return (
    <>
      <input type="text" name={name} value={value} onChange={onChange} />
      <p>{value}</p>
    </>
  );
};

export default MyInput;

interface Props {
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
