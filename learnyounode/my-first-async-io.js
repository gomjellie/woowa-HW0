const fs = require("fs");
const process = require("process");

fs.readFile(process.argv[2], null, (err, data) => {
  if (err) {
    return;
  }
  console.log(data.toString().split("\n").length - 1);
});

