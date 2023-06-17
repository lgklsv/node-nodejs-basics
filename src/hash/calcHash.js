import * as url from 'url';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const fileBuffer = await fs.readFile(fileToHash);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');
    console.log(hex);
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
