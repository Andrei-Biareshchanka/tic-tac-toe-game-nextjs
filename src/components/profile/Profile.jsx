import Image from "next/image";
import avatarSrc from "./avatarSrc.png";
import clsx from "clsx";

export default function Profile({
  className,
  name,
  rating,
  avatar = avatarSrc,
}) {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex items-center gap-2 mr-4 text-start text-teal-600",
      )}
    >
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
  );
}
