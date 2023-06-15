import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRename = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFileDest = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(fileToRename, fs.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    await fs.access(newFileDest, fs.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.message === 'FS operation failed') {
      throw new Error('FS operation failed');
    }
  }
  try {
    await fs.rename(fileToRename, newFileDest);
  } catch (err) {
    console.error(err);
  }
};

await rename();
