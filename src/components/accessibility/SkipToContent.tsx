export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg focus:not-sr-only focus:fixed focus:top-5 focus:left-5 focus:z-[9999]"
    >
      Skip to main content
    </a>
  );
}
