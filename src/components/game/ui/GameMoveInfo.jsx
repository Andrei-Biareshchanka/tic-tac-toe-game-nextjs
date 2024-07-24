import GameSymbol from "./GameSymbol";

export default function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight">
        Current:
        <GameSymbol
          symbol={currentMove}
          className={"text-blue-600"}
          fontSize="medium"
        />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Next:
        <GameSymbol
          symbol={nextMove}
          className={"text-green-600"}
          fontSize="small"
        />
      </div>
    </>   
  );
}