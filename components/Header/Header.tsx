import { Logo, Menubar, ThemeToggle } from "@/components/Header";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b border-secondary/10 lg:hidden">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<Logo />
				<Menubar />
				<ThemeToggle />
			</nav>
		</header>
	);
};
