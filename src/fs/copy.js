import * as url from 'url';
import fs from 'fs';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirToCopy = path.join(__dirname, 'files');
const copyDest = path.join(__dirname, 'files_copy');

const copy = async () => {
  fs.access(dirToCopy, fs.F_OK, err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });

  fs.access(copyDest, fs.F_OK, err => {
    if (err) return;
    throw new Error('FS operation failed');
  });

  fs.cp(dirToCopy, copyDest, { recursive: true }, err => {
    if (err) {
      console.error(err);
    }
  });
};

await copy();
