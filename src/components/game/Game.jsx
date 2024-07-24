'use client';

import { useMemo, useReducer, useCallback } from 'react';
import GameLayout from '@/components/game/ui/GameLayout' 
import GameTitle from '@/components/game/ui/GameTitle'
import GameInfo from '@/components/game/ui/GameInfo'
import GameMoveInfo from '@/components/game/ui/GameMoveInfo'
import { GameCell } from '@/components/game/ui/GameCell'
import GameOverModal from '@/components/game/ui/GameOverModal'
import BackLink from '@/components/game/ui/BackLink'
import PlayerInfo from '@/components/game/ui/PlayerInfo'
import { PLAYERS } from '@/components/game/constants'
import { 
  GAME_STATE_ACTIONS, 
  gameReducer, 
  initGameState,
} from '@/components/game/model/gameReducer'
import { computeWinnerSymbol } from '@/components/game/model/computeWinnerSymbol';
import { computeWinner } from '@/components/game/model/computeWinner';
import { getNextMove } from '@/components/game/model/getNextMove';
import { computePlayerTimer } from '@/components/game/model/computePlayerTimer';
import { useInterval } from '../lib/timers';

const PLAYERS_COUNT = 4;

export default function Game() {
  const [gameState, dispatch] = useReducer(
    gameReducer, 
    { 
      playersCount: PLAYERS_COUNT, 
      currentMoveStart: Date.now(),
      defaultTimer: 10000,
    }, 
    initGameState
  );

  const { cells, currentMove, timers, currentMoveStart } = gameState;

  useInterval(
    1000, 
    !!currentMoveStart, 
    useCallback(() => {
      dispatch({ 
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, [])
  )  

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, { 
    winnerSequence, 
    nextMove,
  });

  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);
  
  const handleCellClick = useCallback((index) => {
    dispatch({ 
      type: GAME_STATE_ACTIONS.CELL_CLICK, 
      index,
      now: Date.now(),
    })
  }, []);

  return (
    <>
    <GameLayout 
      title={<GameTitle />} 
      gameInfo={<GameInfo playersCount={4} isRatingGame timeMode="1 min per move" />} 
      backLink={<BackLink />}
      playersList={
        PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);

          return (
            <PlayerInfo 
              key={player.id} 
              avatar={player.avatar} 
              name={player.name} 
              rating={player.rating} 
              symbol={player.symbol}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          )
        }
        )
      }
      gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
      gameCells={cells.map((cell, index) => (
        <GameCell 
          key={index}
          index={index}
          isWinner={winnerSequence?.includes(index)}
          onClick={handleCellClick}
          disabled={!!winnerSymbol} 
          symbol={cell}
        />))}
    />
    <GameOverModal 
      winnerName={winnerPlayer?.name}
      players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
        <PlayerInfo 
          key={player.id} 
          avatar={player.avatar} 
          name={player.name} 
          rating={player.rating} 
          symbol={player.symbol}
          timer={timers[player.symbol]}
          isRight={index % 2 === 1}
        />))}        
      />
    </>
  )
}