import { cn } from "@/utils/cn";

interface Props {
  className?: string;
}

export default function BlurBlob({ className }: Props) {
  return (
    <div
      className={cn(
        `absolute rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 opacity-40 blur-[120px]`,
        className,
      )}
    />
  );
}
