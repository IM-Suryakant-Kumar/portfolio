import { links } from "@/lib";
import { Menubar, ThemeToggle } from "@/components/Header";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b-2 border-gray-200">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<h1 className="text-orange-500 text-2xl md:text-3xl font-cinzel font-bold">
					Suryakant
				</h1>
				<Menubar />
				<ul className="hidden md:flex items-center gap-6">
					{links.map(({ name, href }) => (
						<li key={href} className="hidden md:flex ">
							<a
								className="text-secondary hover:bg-secondary/10 text-lg rounded-md"
								href={href}
							>
								{name}
							</a>
						</li>
					))}
				</ul>
				<ThemeToggle />
			</nav>
		</header>
	);
};
