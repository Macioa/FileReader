

async function ReadFile(file) {
    const { name } = file;
    const Reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      Reader.onload = e => resolve({ name, text: Reader.result });
      Reader.onerror = e => reject(Reader.error);
    });
    Reader.readAsText(file);
    return promise;
  }

self.addEventListener("message", e => {
    console.error("WORKER RECEIVED MESSAGE",e.data)
    ReadFile(e.data).then(data=>self.postMessage(data))
} )
