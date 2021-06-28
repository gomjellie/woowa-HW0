
/**
 * @typedef {{score1: Number, score2: Number}} TypeStateScore - 점수 상태를 저장하는 자료형
 */

/**
 * @typedef { "Empty" | "O" | "X" } TypeBlock
 */

/**
 * @typedef { Array.<Array.<TypeBlock>> } TypeStateBoard
 */

/**
 * @typedef { {score: TypeStateScore, board: TypeStateBoard, stone: TypeBlock} } TypeStateRoot
 */

/**
 * @typedef { (targetElement: Element, state: TypeStateRoot) => Element } TypeFC
 */