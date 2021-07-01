/**
 * @template T
 * @param {T} obj
 * @returns {T} deepcopied
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default { deepCopy };
