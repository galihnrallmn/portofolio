interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchPriority="auto"
      sizes="
        (max-width:640px) 100vw,
        (max-width:1024px) 50vw,
        33vw
      "
      className={className}
      {...props}
    />
  );
}
