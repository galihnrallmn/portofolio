import ResponsiveImage from "./ResponsiveImage";

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AvatarImage({ src, alt, className }: AvatarImageProps) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${className ?? ""} `}
    />
  );
}
