import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.access(fileToRemove, fs.F_OK);
    await fs.unlink(fileToRemove);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
