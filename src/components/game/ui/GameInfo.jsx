import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RestoreIcon from "@mui/icons-material/Restore";

export default function GameInfo({playersCount, isRatingGame, timeMode}) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarBorderIcon />}
      <div className="flex items-center gap-1">
        <PersonOutlineIcon />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <RestoreIcon /> {timeMode}
      </div>
    </div>
  )
}