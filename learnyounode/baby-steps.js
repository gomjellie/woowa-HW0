const process = require("process");

console.log(process.argv.slice(2).reduce((acc, n) => acc + parseInt(n), 0));
