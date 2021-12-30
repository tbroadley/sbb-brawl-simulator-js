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
    return SimulationResult.TIE
}

console.log(simulate({ board1: {}, board2: {} }))