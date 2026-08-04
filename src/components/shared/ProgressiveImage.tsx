import BlurImage from "./BlurImage";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ProgressiveImage({ src, alt, className }: Props) {
  return <BlurImage src={src} alt={alt} className={className} />;
}
