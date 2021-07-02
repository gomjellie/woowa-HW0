const http = require("http");
const process = require("process");

http.get(process.argv[2], (res) => {
  res.setEncoding("utf-8");
  res.on("data", console.log);
});
