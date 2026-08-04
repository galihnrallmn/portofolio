import type { ImgHTMLAttributes } from "react";
import { useState } from "react";

import Skeleton from "./Skeleton";

type BlurImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function BlurImage({
  className = "",
  ...props
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}

      <img
        {...props}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-500 ${
          loaded
            ? "blur-0 scale-100 opacity-100"
            : "scale-105 opacity-0 blur-xl"
        } ${className} `}
      />
    </div>
  );
}
