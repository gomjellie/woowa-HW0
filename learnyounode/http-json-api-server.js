const http = require("http");
const stream = require("stream");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const iso = url.searchParams.get("iso");
  const t = new Date(iso);

  if (url.pathname === "/api/parsetime") {
    const ret = {
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds(),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ret));
    return;
  }
  if (url.pathname === "/api/unixtime") {
    const ret = {
      unixtime: t.getTime(),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ret));
  }
});

server.listen(process.argv[2]);
