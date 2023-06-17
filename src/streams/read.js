import fs from 'fs';
import * as url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  fs.createReadStream(fileToRead).pipe(process.stdout);
};

await read();
