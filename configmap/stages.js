import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('http://localhost:60546/api/message/getAllMessages');
  check(res, { 'status was 500': (r) => r.status == 500 });
  sleep(1);
}

