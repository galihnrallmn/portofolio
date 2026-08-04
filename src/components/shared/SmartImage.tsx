import type { ImgHTMLAttributes } from "react";
import { useState } from "react";

import { cn } from "@/utils/cn";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function SmartImage({ className, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}

      <img
        {...props}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
