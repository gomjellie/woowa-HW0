const fs = require("fs");
const process = require("process");

fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    return;
  }

  const filteredFiles = files.filter((file) => {
    return file.endsWith(`.${process.argv[3]}`);
  });

  console.log(filteredFiles.join("\n"));
});
