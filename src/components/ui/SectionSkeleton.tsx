export default function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8 h-8 w-56 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-700"
          />
        ))}
      </div>
    </div>
  );
}
