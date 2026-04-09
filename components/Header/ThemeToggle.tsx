"use client";

// import { useState } from "react";

export const ThemeToggle = () => {
  // const [theme, setTheme] = useState<"dark" | "light">(localStorage.theme);

  const toggleTheme = () => {
    // setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    // localStorage.theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div>
      <button onClick={toggleTheme} className="w-8 h-8 bg-secondary dark:bg-primary rounded-full border-2 cursor-pointer" />
    </div>
  )
}