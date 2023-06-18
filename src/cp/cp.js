import * as url from 'url';
import path from 'path';
import { fork } from 'node:child_process';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const childPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async args => {
  fork(childPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hi', 'how', 'are', 'you']);
