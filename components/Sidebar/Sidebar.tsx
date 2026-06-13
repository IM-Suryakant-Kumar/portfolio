import { ThemeToggle } from "../Header";

export const Sidebar = () => {
	return (
		<div className="hidden w-65 xl:w-80 h-screen fixed left-0 bottom-0 lg:flex flex-col border-r border-secondary/10">
			<div className="w-65 ml-auto p-4">
				<div className="p-4 border-b border-secondary/10">
					<ThemeToggle />
				</div>
				<div className="p-4 border-b border-secondary/10">
					<h2 className="text-secondary text-lg font-bold">About me</h2>
					<p className="text-gray-400">
						I&apos;m{" "}
						<span className="span-primary font-bold underline decoration-dotted text-orange-500 font-cinzel">
							Suryakant
						</span>
						, Full Stack Web Developer.
					</p>
				</div>
				<div className="p-4 border-b border-secondary/10">
				</div>
				<div className="p-4 border-b border-secondary/10">div</div>
			</div>
		</div>
	);
};
