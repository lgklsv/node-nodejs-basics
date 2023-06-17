import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'path';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');
const CPU_CORES = os.cpus().length;
const DEFAULT_FIB_INPUT = 10;

const performCalculations = async () => {
  const createWorker = fibInput =>
    new Promise(resolve => {
      const worker = new Worker(workerPath, { workerData: { fibInput } });
      worker.on('message', data => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });

  const workers = [];
  for (let i = 0; i < CPU_CORES; i++) {
    workers.push(createWorker(i + DEFAULT_FIB_INPUT));
  }
  const res = await Promise.all(workers);
  console.log(res);
};

await performCalculations();
