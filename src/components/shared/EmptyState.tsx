import { FaBoxOpen } from "react-icons/fa";

interface Props {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No Data",
  description = "There is nothing to display.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
      <FaBoxOpen
        className="mb-5 text-slate-400 dark:text-slate-600"
        size={48}
      />

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}
