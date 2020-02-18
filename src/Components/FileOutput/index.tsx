import React from "react";
import { TextFile } from "../../Utilities/FileReader/ReadFile";

export const FileOutputSingle = ({ name, text, ...restProps }: any) => (
  <div className="file" {...restProps}>
    <h3>{name}</h3>
    <p>{text}</p>
  </div>
);

export interface FileOutputProps {
  files: TextFile[];
  time?: number;
  [key: string]: any;
}

export const FileOutput = ({ files,  ...restProps }: any) => {
  const Files = (files || []).map((file: TextFile, i: number) =>
    FileOutputSingle({ ...file, key: `File ${i}` })
  );
  return (
    <div className="file-list" style={{border:"2px solid",padding:"30px"}} {...restProps}>
      <h1>{`${files?.length} files`}</h1>
      {Files}
    </div>
  );
};
