import fs from 'fs';
import * as url from 'url';
import path from 'path';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const compressedFileDest = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = fs.createReadStream(fileToCompress);
  const writeStream = fs.createWriteStream(compressedFileDest);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
