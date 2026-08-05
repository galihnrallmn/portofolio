import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black text-blue-600">404</h1>

      <h2 className="mt-6 text-3xl font-bold">Page Not Found</h2>

      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-10 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back Home
      </Link>
    </section>
  );
}
