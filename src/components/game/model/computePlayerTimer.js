export function computePlayerTimer(gameState, playerSymbol) {
  const { timers, currentMove, currentMoveStart } = gameState;

  return {
    timer: timers[playerSymbol],
    timerStartAt: playerSymbol === currentMove 
      ? currentMoveStart 
      : null
  }
}