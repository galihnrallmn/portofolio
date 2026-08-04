import { cn } from "@/utils/cn";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn("h-px w-full bg-slate-200 dark:bg-slate-700", className)}
    />
  );
}
