import fs from 'fs';
import * as url from 'url';
import path from 'path';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToDecompress = path.join(__dirname, 'files', 'archive.gz');
const decompressedFileDest = path.join(
  __dirname,
  'files',
  'fileToCompress.txt'
);

const decompress = async () => {
  const readStream = fs.createReadStream(fileToDecompress);
  const writeStream = fs.createWriteStream(decompressedFileDest);
  const unzip = zlib.createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
