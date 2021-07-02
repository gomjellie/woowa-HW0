const http = require("http");
const process = require("process");

let ans = "";

http.get(process.argv[2], (res) => {
  res.setEncoding("utf-8");
  res.on("data", (data) => {
    ans = ans.concat(data);
  });
  res.on("end", () => {
    console.log(ans.length);
    console.log(ans);
  });
});
