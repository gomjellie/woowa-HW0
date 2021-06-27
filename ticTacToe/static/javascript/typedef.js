
/**
 * @typedef {{score1: Number, score2: Number}} TypeScore - 점수 상태를 저장하는 자료형
 */

/**
 * @typedef { "Empty" | "O" | "X" } TypeBlock
 */

/**
 * @typedef { Array.<Array.<TypeBlock>> } TypeBoard
 */

/**
 * @typedef { {score: TypeScore, board: TypeBoard} } TypeRootState
 */

/**
 * @typedef { (targetElement: Element, state: TypeRootState) => Element } TypeComponent
 */