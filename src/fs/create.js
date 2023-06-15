import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await fs.access(filePath, fs.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.message === 'FS operation failed') {
      throw new Error('FS operation failed');
    }
  }
  try {
    await fs.appendFile(filePath, 'I am fresh and young');
    console.log('Saved!');
  } catch (err) {
    console.error(err);
  }
};

await create();
