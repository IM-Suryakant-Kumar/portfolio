"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const  ThemeToggle = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.theme = newTheme;
	};

	useEffect(() => {
		document.documentElement.classList.toggle(
			"dark",
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
		(() => {
			setTheme(
				localStorage.theme ||
					(window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light"),
			);
		})();
	}, []);

	return (
		<button
			onClick={toggleTheme}
			className="hover:bg-secondary/10 p-2 rounded-md cursor-pointer ml-4 lg:ml-auto"
		>
			{theme === "light" ? (
				<MdOutlineDarkMode className="w-6 h-6 text-secondary/90" />
			) : (
				<MdOutlineLightMode className="w-6 h-6 text-secondary/90" />
			)}
		</button>
	);
};
