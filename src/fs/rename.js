import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRename = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFileDest = path.join(__dirname, 'files', 'properFilename.md');
const toBool = [() => true, () => false];

const rename = async () => {
  const fileToRenameExists = await fs.access(fileToRename).then(...toBool);
  const newFileDestExists = await fs.access(newFileDest).then(...toBool);
  if (!fileToRenameExists || newFileDestExists) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(fileToRename, newFileDest);
  } catch (err) {
    console.error(err);
  }
};

await rename();
