import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<article className="min-h-[calc(100vh-60px)] md:min-h-screen flex flex-col gap-4">
			<div className="flex flex-col justify-center mb-8">
				<h2 className="title flex items-center gap-4">
					<Image
						src="/about.png"
						alt="about me"
						width={40}
						height={40}
						className="border-2 rounded-md border-secondary/80 p-1"
					/>
					<span className="font-bold">About Me</span>
				</h2>
				<div className="max-w-4xl">
					<p className="mt-10 text-secondary/80 text-md md:text-lg">
						Hey, I&apos;m Suryakant! Welcome to my corner of the web for{" "}
						<Link
							href="/notes"
							className="text-blue-400 hover:bg-secondary/10 underline decoration-dotted"
						>
							writting
						</Link>
						,{" "}
						<Link
							href="/projects"
							className="text-blue-400 hover:bg-secondary/10 underline decoration-dotted"
						>
							projects
						</Link>
						,{" "}
						<Link
							href="/blog"
							className="text-blue-400 hover:bg-secondary/10 underline decoration-dotted"
						>
							tutorials
						</Link>{" "}
						and anything else I find interesting. I have been making websites
						since 2022, starting with simple HTML and CSS pages. Over the years,
						I have expanded my skills to include JavaScript, React, and Node.js,
						allowing me to build dynamic and interactive web applications.
					</p>
					<p className="mt-4 text-secondary/80 text-md md:text-lg">
						I know how to create responsive designs that work well on both
						desktop and mobile devices, ensuring a great user experience across
						all platforms and RestAPI integration for seamless data exchange.
					</p>
					<p className="mt-6 text-secondary/80 text-md md:text-lg">
						I also know how to use Git and GitHub for version control, which has
						helped me collaborate with other developers and manage my projects
						more effectively.
					</p>
				</div>
			</div>
		</article>
	);
};

export default page;
