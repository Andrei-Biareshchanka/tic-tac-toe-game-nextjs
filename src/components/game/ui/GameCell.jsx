import { memo } from 'react';
import GameSymbol from './GameSymbol';
import clsx from 'clsx';

export const GameCell = memo(function GameCell({ 
  index,
  onClick, 
  isWinner, 
  disabled, 
  symbol,
 }) {

  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10",
      )}
      onClick={() => onClick(index)}
    >
      {symbol && <GameSymbol fontSize="medium" symbol={symbol} />}
    </button>
  );
})