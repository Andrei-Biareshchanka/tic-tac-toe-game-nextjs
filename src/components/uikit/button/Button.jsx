import { SubdirectoryArrowLeftTwoTone } from "@mui/icons-material";
import clsx from "clsx";

/**
 * @param {{
 *  classNames?: string,
 *  children: string,
 *  variant: "primary" | "outline",
 *  size: "md" | "lg",
 * }} props
 */
export default function Button({
  children,
  className,
  size,
  variant,
}) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
