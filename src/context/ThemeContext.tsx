import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children: ReactNode;
}

const STORAGE_KEY = "theme";

// Keep in sync with the <meta name="theme-color"> media-query fallbacks
// and the `.dark body` rule in src/index.css.
const THEME_COLOR = {
  light: "#ffffff",
  dark: "#020617",
} as const;

function getSystemTheme(): Theme {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const saved = window.localStorage?.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // localStorage unavailable (private mode, disabled, etc.)
  }

  return null;
}

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  // index.html runs a blocking script that already applies the "dark"
  // class before React mounts, so reading it back here keeps the first
  // render in sync with what was already painted (no flash / mismatch).
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return getStoredTheme() ?? getSystemTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');

  if (meta) {
    meta.setAttribute("content", THEME_COLOR[theme]);
  }
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);

    try {
      window.localStorage?.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Follow OS-level changes only if the user hasn't explicitly chosen a
  // theme in this app yet.
  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event: MediaQueryListEvent) {
      if (getStoredTheme() !== null) {
        return;
      }

      setTheme(event.matches ? "dark" : "light");
    }

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
