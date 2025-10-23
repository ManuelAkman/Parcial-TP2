import server from './server.js';

const PORT = 3100;
const HOST = '127.0.0.1';

server.listen(PORT, () => {
  console.log(`Serving in : http://${HOST}:${PORT}`);
});
