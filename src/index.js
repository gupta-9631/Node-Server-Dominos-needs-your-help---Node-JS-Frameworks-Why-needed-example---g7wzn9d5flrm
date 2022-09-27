var http = require("http");
const data = require("./data");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "./welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  } else if (req.url === "./contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end();
  }
}
httpServer.listen(8081);
module.exports = httpServer;

