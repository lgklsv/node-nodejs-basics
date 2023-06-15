import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    await fs.access(fileToRead, fs.F_OK);
    const fileContent = await fs.readFile(fileToRead, 'utf-8');
    console.log(fileContent);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
