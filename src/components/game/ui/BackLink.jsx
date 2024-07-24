import Link from "next/link";
import WestIcon from "@mui/icons-material/West";

export default function BackLink() {
  return (
    <Link
        href="#"
        className="flex items-center gap-2 text-[18px] text-teal-600 mb-2"
      >
        <WestIcon fontSize="small" />
        Home
      </Link>
  )
}