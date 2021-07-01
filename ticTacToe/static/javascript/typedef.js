/**
 * @typedef {{x: Number, o: Number}} TypeStateScore
 */

/**
 * @typedef { "Empty" | "O" | "X" } TypeBlock
 */

/**
 * @typedef { Array.<Array.<TypeBlock>> } TypeStateBoard
 */

/**
 * @typedef { {
 *  score: TypeStateScore,
 *  board: TypeStateBoard,
 *  boardHistory: Array.<TypeStateBoard>,
 *  stone: TypeBlock,
 *  finished: Boolean,
 * } } TypeStateRoot
 */

/**
 * @typedef { (targetElement: Element, state: TypeStateRoot) => Element } TypeFC
 */
