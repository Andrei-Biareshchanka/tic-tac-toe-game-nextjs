import { GAME_SYMBOLS, MOVE_ORDER } from '../constants';
import { getNextMove } from './getNextMove';

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'CELL_CLICK',
  TICK: 'TICK',
}

export const initGameState = ({ playersCount, currentMoveStart, defaultTimer }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
  currentMoveStart,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }

    return timers;
  }, {}),
})

export const gameReducer = (state, action) => {
  switch(action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;

      if (state.cells[index]) {
        return state;
      }

      return {        
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCells(state, index),    
      }
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {        
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
      }
    }
    default: {
      return state;
    }
  }
}
function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff ,
  }
}

function updateCells(gameStae, index) {
  return gameStae.cells.map((cell, i) =>
    i === index ? gameStae.currentMove : cell,
  )
}

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];

  return timer <= 0;
}
