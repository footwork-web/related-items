// This stress test simulates 200 simultaneous virtual users accessing the API route for the project over a period of 1 minute
// Run this stress test with the command 'k6 run stresstest.js' while in the root directory of this project

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  duration: '1m',
  vus: 200,
};

export default function () {
  const n = Math.ceil(Math.random() * 10000000);
  const BASE_URL = `http://localhost:3003/api/data/${n}`;
  let res = http.get(BASE_URL);
  check(res, {
    'is status 200': r => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(.1);
}