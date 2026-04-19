import { Menubar, ThemeToggle } from "@/components/Header";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b border-secondary/10 lg:w-65 lg:bottom-0 lg:border-r">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center lg:h-full lg:justify-start lg:items-start lg:flex-wrap">
				<Link
					href="/"
					className="text-orange-500 text-2xl md:text-3xl font-cinzel font-bold"
				>
					Suryakant
				</Link>
				<Menubar />
				<ThemeToggle />
				{/* <div className="flex items-center gap-2">
				</div> */}
			</nav>
		</header>
	);
};
