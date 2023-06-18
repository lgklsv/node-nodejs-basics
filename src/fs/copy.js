import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirToCopy = path.join(__dirname, 'files');
const copyDest = path.join(__dirname, 'files_copy');
const toBool = [() => true, () => false];

const copy = async () => {
  const dirToCopyExists = await fs.access(dirToCopy).then(...toBool);
  const copyDestExists = await fs.access(copyDest).then(...toBool);
  if (!dirToCopyExists || copyDestExists) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.cp(dirToCopy, copyDest, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};

await copy();
