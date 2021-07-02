const fs = require("fs");
const process = require("process");
const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(files.join("\n"));
});
