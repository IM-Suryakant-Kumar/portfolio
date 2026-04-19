import { Menubar, ThemeToggle } from "@/components/Header";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b border-secondary/10 lg:hidden">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<Link
					href="/"
					className="text-orange-500 text-2xl md:text-3xl font-cinzel font-bold"
				>
					Suryakant
				</Link>
				<Menubar />
				<ThemeToggle />
			</nav>
		</header>
	);
};
