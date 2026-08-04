interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <hr
      className={`border-0 border-t border-slate-200 dark:border-slate-700 ${className} `}
    />
  );
}
