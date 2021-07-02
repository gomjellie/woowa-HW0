const http = require("http");
const stream = require("stream");

const port = process.argv[2];

const toUpperCase = new stream.Transform();

toUpperCase._transform = function (data, encoding, done) {
  this.push(data.toString().toUpperCase());
  done();
};

const server = http.createServer((req, res) => {
  req.pipe(toUpperCase).pipe(res);
});

server.listen(port);
