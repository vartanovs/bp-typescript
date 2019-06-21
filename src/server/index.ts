/**
 * @module server/index.ts
 * @description Server Initialization File
 */

import * as http from 'http';

const PORT = 3000;

// Generate and Configure Server
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World from TS Node!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Route Not Found!');
  }
  return res.end();
});

// Active Server
server.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`));
