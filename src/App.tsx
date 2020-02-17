import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { FileInput } from "./Components/FileInput/index";
import { ReadFile } from "./Utilities/FileReader";
import { FileOutput } from "./Components/FileOutput";

function App() {
  const [fileList, setFiles] = useState();
  async function readFiles(e: any, { files = [] } = {}) {
    Array.from(files).map(async file =>
      setFiles([...(fileList || []), await ReadFile(file)])
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileInput onSubmit={readFiles} />
        <FileOutput files={fileList} />
      </header>
    </div>
  );
}

export default App;