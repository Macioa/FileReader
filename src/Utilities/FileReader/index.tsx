import { ReadFile, TextFile } from "./ReadFile";

export function ReadFilesMultiThread(files: any[]): Promise<TextFile>[] {
  files = files || [];
  if (window.Worker) {
    return Array.from(files).map(
      file =>
        new Promise((resolve, reject) => {
          var worker = new Worker("worker.js");
          worker.onmessage = e => {
            console.error("MASTER RECEIVED MESSAGE", e.data);
            resolve(e.data);
            worker.terminate();
          };
          setTimeout(() => reject("Timeout"), 60000);
          worker.postMessage(file);
        })
    );
  } else throw "Workers not supported";
}

export function ReadFilesSingleThread(files: any[]): Promise<TextFile>[] {
  return Array.from(files).map(file => ReadFile(file));
}
