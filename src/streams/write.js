import fs from 'fs';
import * as url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  process.stdin.pipe(fs.createWriteStream(fileToWrite));
};

await write();
