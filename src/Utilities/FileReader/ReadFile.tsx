export interface TextFile {
  name: string;
  text: string | ArrayBuffer | null;
}

export async function ReadFile(file: File) {
  const { name } = file;
  const Reader = new FileReader();
  const promise = new Promise<TextFile>((resolve, reject) => {
    Reader.onload = e => resolve({ name, text: Reader.result });
    Reader.onerror = e => reject(Reader.error);
  });
  Reader.readAsText(file);
  return promise;
}