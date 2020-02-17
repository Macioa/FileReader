import React from "react";
import { TextFile } from "../../Utilities/FileReader";

export const FileOutputSingle = ({ name, text, ...restProps }: any) => (
  <div className="file" {...restProps}>
    <h1>{name}</h1>
    <p>{text}</p>
  </div>
);

export interface FileOutputProps {
  files: TextFile[];
  [key: string]: any;
}

export const FileOutput = ({ files, ...restProps }: any) => {
  const Files = (files || []).map((file: TextFile, i: number) =>
    FileOutputSingle({ ...file, key: `File ${i}` })
  );
  return (
    <div className="file-list" {...restProps}>
      {Files}
    </div>
  );
};
