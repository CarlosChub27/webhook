const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  // Redirige todas las solicitudes a http://localhost:80/p1
  // proxy.web(req, res, { target: 'http://localhost:80/p2' }); //funciono
  proxy.web(req, res, { target: 'http://localhost:3000/urlout'});
});

server.listen(4001, () => {
  console.log('Proxy server iniciado en el puerto 4001');
});