const fs = require("fs");

/**
 *
 * @param {String} path
 * @param {String} fileExtension
 * @param {(err: NodeJS.ErrnoException, files: String[]) => void} callback
 */
const mymodule = (path, fileExtension, callback) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const filteredFiles = files.filter((filename) => {
      return filename.endsWith(`.${fileExtension}`);
    });

    callback(null, filteredFiles);
  });
};

module.exports = mymodule;
