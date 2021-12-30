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

export function simulate(state: State): SimulationResult {
    return SimulationResult.TIE
}

console.log(simulate({ board1: {}, board2: {} }))