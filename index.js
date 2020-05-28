const http = require('http');

exports.keepalive = (port) => {
  console.debug(`setting port to ${port}`)
  if (!port) {
    if (process.env.WEBSITES_PORT) {
      port = process.env.WEBSITES_PORT
    } else {
      port = 8080
    }
  }

  console.debug(`azure-app-service-keepalive starting on port ${port}`)

  http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('azure-app-service-keepalive running');
    res.end();
  }).listen(port);

  console.debug(`azure-app-service-keepalive running on port ${port}`)
}