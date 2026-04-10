"use client";

import { useState } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
	const [theme, setTheme] = useState<"dark" | "light">("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
		// localStorage.theme = theme === "light" ? "dark" : "light";
		if (theme === "light") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="hover:bg-secondary/10 p-2 rounded-md cursor-pointer"
		>
			{theme === "light" ? (
				<MdOutlineDarkMode className="w-6 h-6 " />
			) : (
				<MdLightMode className="w-6 h-6 " />
			)}
		</button>
	);
};
