import ResponsiveImage from "./ResponsiveImage";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  className,
}: ProjectImageProps) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      className={`aspect-video w-full object-cover ${className ?? ""} `}
    />
  );
}
