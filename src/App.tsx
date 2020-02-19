import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { FileInput } from "./Components/FileInput/index";
import { FileOutput } from "./Components/FileOutput";
import {
  ReadFilesMultiThread,
  ReadFilesSingleThread
} from "./Utilities/FileReader";

function App() {
  const [fileList, setFiles] = useState(),
    [multiThreadTime, setMTime] = useState(),
    [singleThreadTime, setSTime] = useState();

  function readFiles(e: any, { files = [] } = {}) {
    let start = Date.now()
    // Promise.all(ReadFilesSingleThread(files)).then(results => {
    //   setSTime(Date.now()- start);
    //   setFiles(results);
    // }).catch(err=>console.error(err));
    Promise.all(ReadFilesMultiThread(files)).then(results => {
      setMTime(Date.now() - start);
      // setFiles(results);
      start = Date.now()
      Promise.all(ReadFilesSingleThread(files)).then(results => {
        setSTime(Date.now()- start);
        // setFiles(results);
      }).catch(err=>console.error(err));
    }).catch(err=>console.error(err));

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileInput onSubmit={readFiles} />
        <h2>{`${multiThreadTime} ms multithread`}</h2>
        <h2>{`${singleThreadTime} ms singlethread`}</h2>
        <FileOutput files={fileList} />
      </header>
    </div>
  );
}

export default App;
