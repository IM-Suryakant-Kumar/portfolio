import { ThemeToggle } from "../Header";
import { SidebarMenuLinks } from ".";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<div className="hidden w-65 xl:w-80 h-screen fixed left-0 bottom-0 lg:flex flex-col border-r border-secondary/10">
			<div className="w-65 ml-auto p-4">
				<div className="p-4 border-b border-secondary/10">
					<ThemeToggle />
				</div>
				<div className="p-4 border-b border-secondary/10">
					<h2 className="text-secondary text-lg font-bold">About me</h2>
					<p className="text-secondary/70">
						I&apos;m{" "}
						<span className="span-primary font-bold underline decoration-dotted text-orange-500 font-cinzel">
							Suryakant
						</span>
						, Full Stack Web Developer.
					</p>
				</div>
				<div className="p-4 border-b border-secondary/10">
					<SidebarMenuLinks />
				</div>
				<div className="p-4">
					<h2 className="text-secondary text-lg font-bold">Stay Connected</h2>
					<div className="flex flex-col gap-1 mt-2">
						<Link
							href="mailto:ksuryakant43@gmail.com"
							className="text-secondary/70 hover:text-secondary text-sm mt-2"
						>
							Email
						</Link>
						<Link
							href="https://github.com/IM-Suryakant-Kumar"
							className="text-secondary/70 hover:text-secondary text-sm mt-2"
						>
							GitHub
						</Link>
						<Link
							href="https://www.linkedin.com/in/suryakant-kumar/"
							className="text-secondary/70 hover:text-secondary text-sm mt-2"
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
