import * as url from 'url';
import fs from 'fs';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  fs.access(filePath, fs.F_OK, err => {
    if (err) return;

    //file exists
    throw new Error('FS operation failed');
  });

  fs.appendFile(filePath, 'I am fresh and young', function (err) {
    if (err) throw new Error('FS operation failed');
    console.log('Saved!');
  });
};

await create();
