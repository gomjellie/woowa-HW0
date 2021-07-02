const fs = require("fs");
const http = require("http");
const process = require("process");

const port = process.argv[2];
const location = process.argv[3];

const server = http.createServer((req, res) => {
  const read = fs.createReadStream(location);
  read.pipe(res);
});

server.listen(port);
