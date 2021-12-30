import { random } from "lodash"

interface Board {

}

interface State {
    board1: Board;
    board2: Board;
}

enum SimulationResult {
    BOARD_1_WIN = 'BOARD_1_WIN',
    BOARD_2_WIN = 'BOARD_2_WIN',
    TIE = 'TIE',
}

interface Randoms {
    nextFrontRowAttack: () => number
}

export function simulate(state: State, randoms: Randoms): SimulationResult {
    console.log(randoms.nextFrontRowAttack())
    return SimulationResult.TIE
}

const realRandoms: Randoms = {
    nextFrontRowAttack() {
        return random(4);
    }
}

console.log(simulate({ board1: {}, board2: {} }, realRandoms))