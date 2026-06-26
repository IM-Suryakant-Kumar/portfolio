import { projects } from "@/lib";
import Image from "next/image";
import Link from "next/link";

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
						className="border-2 border-secondary/10 rounded-lg overflow-hidden flex flex-col gap-2 p-4"
          >
            <p className="text-secondary/60 text-sm">2019</p>
						<Link href={project.github} target="_blank" className="text-blue-400 hover:underline text-xl font-cinzel font-semibold">
							{project.title}
						</Link>
						<p className="text-md text-secondary/80">{project.des}</p>
						<div className="flex gap-2 mt-2">
							<a
								className="text-secondary hover:text-blue-400 h-8 flex justify-center items-center text-sm font-semibold px-2 border-2 border-secondary/10 hover:border-blue-400 rounded-md"
								href={project.live}
								target="_blank"
							>
								Demo
							</a>
							<a
								className="text-secondary hover:text-blue-400 h-8 flex justify-center items-center text-sm font-semibold px-2 border-2 border-secondary/10 hover:border-blue-400 rounded-md"
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
