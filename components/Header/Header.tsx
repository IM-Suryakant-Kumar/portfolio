import { links } from "@/lib";
import { Menubar, ThemeToggle } from "@/components/Header";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b border-secondary/10">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<h1 className="text-orange-500 text-2xl md:text-3xl font-cinzel font-bold">
					Suryakant
				</h1>
				<div className="flex items-center gap-2">
					<Menubar />
					<ThemeToggle />
				</div>
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
			</nav>
		</header>
	);
};
