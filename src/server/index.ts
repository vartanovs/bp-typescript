/**
 * @module server/index.ts
 * @description Server Initialization File
 */

import http from 'http';

const PORT = 3000;

// Generate and Configure Server
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
  if (req.url === '/') res.write('Hello World from TS Node!');
  else res.write('Route Not Found!');
  return res.end();
});

// Active Server
server.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`));
