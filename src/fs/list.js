import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderToRead = path.join(__dirname, 'files');

const list = async () => {
  try {
    await fs.access(folderToRead, fs.F_OK);
    const files = await fs.readdir(folderToRead);
    files.forEach(file => console.log(file));
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
