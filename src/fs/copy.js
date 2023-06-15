import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirToCopy = path.join(__dirname, 'files');
const copyDest = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.access(dirToCopy, fs.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    await fs.access(copyDest, fs.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.message === 'FS operation failed') {
      throw new Error('FS operation failed');
    }
  }

  try {
    await fs.cp(dirToCopy, copyDest, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};

await copy();
