import React, { useState } from "react";

const defaultState: { [key: string]: any } = {};

export interface FileInput {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, formValues: Object) => any;
  [key: string]: any;
}
export const FileInput = ({ onSubmit, ...restProps }: any) => {
  const [values, setValues] = useState(defaultState);
  function onChange({ target }: any) {
    const { name = "result", files, value } = target || {};
    setValues({ ...values, [name]: files || value });
  }
  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(e, values);
  }

  return (
    <form onSubmit={Submit} onChange={onChange} {...restProps}>
      <input type="text" name="text" />
      <br />
      <input type="file" id="input-file" name="files" multiple />
      <br />
      <input type="submit" />
    </form>
  );
};
