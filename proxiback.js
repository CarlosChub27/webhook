const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  // Redirige todas las solicitudes a http://localhost:80/p1
  // proxy.web(req, res, { target: 'http://localhost:80/p1' }); //funciono
  // proxy.web(req, res, { target: 'http://localhost:3000/urlback' });
  proxy.web(req, res, { target: 'http://127.0.0.1:8000/back' });
});

server.listen(4000, () => {
  console.log('Proxy server iniciado en el puerto 4000');
});