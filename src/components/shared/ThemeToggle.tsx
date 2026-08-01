import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-slate-300
        transition
        hover:bg-blue-600
        hover:text-white
      "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
