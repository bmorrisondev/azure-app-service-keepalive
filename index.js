const http = require('http');

exports.keepalive = (port) => {
  if (!port) {
    if (process.env.WEBSITES_PORT) {
      port = process.env.WEBSITES_PORT
    } else {
      port = 8080
    }
  }

  http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('azure-app-service-keepalive running');
    res.end();
  }).listen(port);
}