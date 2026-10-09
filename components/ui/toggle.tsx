"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-[2px] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-black transition-colors duration-300">
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-emerald-400" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )}
      </div>
    </button>
  );
}