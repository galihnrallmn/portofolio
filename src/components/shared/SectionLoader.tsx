export default function SectionLoader() {
  return (
    <section className="flex min-h-[500px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
          Loading section...
        </p>
      </div>
    </section>
  );
}
