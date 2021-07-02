const http = require("http");
const process = require("process");

const servers = process.argv.slice(2);
const store = {};
let finished = 0;

for (const server of servers) {
  http.get(server, (res) => {
    res.setEncoding("utf-8");
    res.on("data", (data) => {
      if (!store[server]) {
        store[server] = "";
      }
      store[server] += data;
    });
    res.on("end", () => {
      finished++;
      if (finished !== servers.length) return;

      for (const server of servers) {
        console.log(store[server]);
      }
    });
  });
}
