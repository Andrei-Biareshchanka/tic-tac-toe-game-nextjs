import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { GAME_SYMBOLS } from "../constants";

export default function GameSymbol({ symbol, className, fontSize }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: <CloseIcon fontSize={fontSize} color="error" />,
      [GAME_SYMBOLS.CIRCLE]: (
        <PanoramaFishEyeIcon fontSize={fontSize} color="success" />
      ),
      [GAME_SYMBOLS.TRIANGLE]: (
        <ChangeHistoryIcon fontSize={fontSize} color="info" />
      ),
      [GAME_SYMBOLS.SQUARE]: (
        <CropSquareIcon fontSize={fontSize} color="warning" />
      ),
    }[symbol] ?? CloseIcon;

  return <div className={className}>{Icon}</div>;
}
