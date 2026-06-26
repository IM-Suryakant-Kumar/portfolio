import { projects } from "@/lib";
import Image from "next/image";

export const Projects = () => {
	return (
		<article className="flex flex-col justify-center gap-4">
			<div className="flex flex-col justify-center mb-4">
				<h2 className="title flex items-center gap-4">
					<Image
						src="/github.png"
						alt="github project"
						width={40}
						height={40}
						className="border-2 rounded-md border-secondary/80 p-1"
					/>
					<span>Projects</span>
				</h2>
				<p className="subtitle">
					Open-source projects I&apos;ve worked on over the years.
				</p>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
				{projects.map((project) => (
					<div
						key={project.title}
						className="border-2 border-gray-300 rounded-md overflow-hidden flex flex-col items-start gap-2 p-4"
					>
						<h2 className="text-xl font-cinzel font-semibold">
							{project.title}
						</h2>
						<p className="text-md text-gray-600">{project.des}</p>
						<div className="text-gray-600 text-xs">
							{project.stack.map((s) => (
								<div
									key={project.title + s}
									className="inline-block mr-2 mb-1 px-2 py-1 rounded border-2 border-gray-300"
								>
									{s}
								</div>
							))}
						</div>
						<div className="w-full flex justify-between mt-4">
							<a
								className="inline-block bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-400 font-bold px-4 py-1 text-sm rounded-xs ease-in-out duration-300"
								href={project.live}
								target="_blank"
							>
								Demo
							</a>
							<a
								className="inline-block text-orange-600 hover:text-orange-700 font-bold border-2 border-orange-400 hover:border-orange-600 px-4 py-1 text-sm rounded-xs ease-in-out duration-300"
								href={project.github}
								target="_blank"
							>
								Source
							</a>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};
