import { random, result } from "lodash";

interface Board {}

interface State {
  board1: Board;
  board2: Board;
}

enum SimulationResult {
  BOARD_1_WIN = "BOARD_1_WIN",
  BOARD_2_WIN = "BOARD_2_WIN",
  TIE = "TIE",
}

interface Randoms {
  firstAttack: () => number;
  nextFrontRowAttack: () => number;
}

function result(state: State): SimulationResult | undefined {
  return undefined;
}

function simulateAttack(
  state: State,
  board1Attacks: boolean,
  randoms: Randoms
): State {
  return state;
}

export function simulateBrawl(
  state: State,
  randoms: Randoms
): SimulationResult {
  let currentState = state;
  let board1Attacks = randoms.firstAttack() === 0;

  while (!result(currentState)) {
    currentState = simulateAttack(state, board1Attacks, randoms);
    board1Attacks = !board1Attacks;
  }

  return result(currentState)!;
}

const realRandoms: Randoms = {
  firstAttack() {
    return random(2);
  },

  nextFrontRowAttack() {
    return random(4);
  },
};

console.log(simulateBrawl({ board1: {}, board2: {} }, realRandoms));
