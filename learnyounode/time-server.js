const net = require("net");
const process = require("process");

/**
 * @returns {String}
 */
const getTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  const hour = `${now.getHours()}`.padStart(2, '0');
  const min = `${now.getMinutes()}`.padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${min}`;
}

const server = net.createServer((socket) => {
  const timeString = getTime();

  socket.end(`${timeString}\n`);
});
server.listen(process.argv[2]);
