// src/components/Divider/Divider.jsx
import clsx from "clsx";

export default function Divider({
  variant = "gradient", // "gradient" | "solid"
  width = "1/3", // "full" | "3/4" | "1/2" | "1/3" | "1/4"
  thickness = 2, // número en px (ej. 2, 3, 4)
  className = "",
}) {
  const widthMap = {
    full: "w-full",
    "3/4": "w-3/4",
    "1/2": "w-1/2",
    "1/3": "w-1/3",
    "1/4": "w-1/4",
  };

  const base = "mx-auto rounded";
  const heightStyle = { height: `${thickness}px` };

  return (
    <div
      className={clsx("flex justify-center", className)}
      aria-hidden="true"
      role="separator"
    >
      {variant === "gradient" ? (
        <div
          className={clsx(
            base,
            widthMap[width],
            "bg-gradient-to-r from-transparent via-gold to-transparent"
          )}
          style={heightStyle}
        />
      ) : (
        <div
          className={clsx(base, widthMap[width], "bg-gold")}
          style={heightStyle}
        />
      )}
    </div>
  );
}
