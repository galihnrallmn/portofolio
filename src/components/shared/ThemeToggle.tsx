import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 10 }}
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      {theme === "light" ? (
        <FaMoon className="text-slate-700" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </motion.button>
  );
}
