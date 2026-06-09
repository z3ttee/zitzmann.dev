import { useEffect, useState } from "react";
import SunIcon from "@assets/sun.svg?react";
import MoonIcon from "@assets/moon.svg?react";
import { DEFAULT_THEME } from "@/constants";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="cursor-pointer relative h-10 aspect-square rounded-sm bg-natural-50 border border-outline-02 overflow-hidden"
      onClick={toggleTheme}
      aria-label="Toggle theme">
      <div
        className={`absolute p-2.5 flex items-center justify-center size-full top-0 origin-bottom transition-all ${theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
        <SunIcon />
      </div>
      <div
        className={`absolute p-2.5 flex items-center justify-center size-full top-0 origin-bottom transition-all ${theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}>
        <MoonIcon />
      </div>
    </button>
  );
}
