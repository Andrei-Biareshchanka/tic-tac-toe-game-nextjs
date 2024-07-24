import Image from "next/image";
import GameSymbol from '@/components/game/ui/GameSymbol';
import clsx from "clsx";
import { useNow } from '@/components/lib/timers';

export default function PlayerInfo({ 
  isRight, 
  name, 
  rating, 
  avatar, 
  symbol, 
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mils / 1000);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="ml-auto flex items-center gap-2 mr-4 text-start text-teal-600 w-44">
          <Image src={avatar} alt="avatar" width={48} height={48} />
          <div className="overrflow-hidden">
            <div className="text-lg leading-tight hover:text-teal-500 truncate">
              {name}
            </div>
            <div className="text-slate-400 text-xs leading-tight">
              Rating: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol fontSize="small" symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx("w-0.5 h-6 bg-slate-200 rounded", isRight && "order-2")}
      />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  )
}
