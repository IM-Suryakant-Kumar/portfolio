import { blogs } from "@/lib";
import Image from "next/image";

export const Blogs = () => (
	<article className="flex flex-col justify-center gap-4">
		<div className="flex flex-col justify-center mb-4">
			<h2 className="title flex items-center gap-4">
				<Image
					src="/pencil.png"
					alt="Pencil"
					width={40}
					height={40}
					className="border-2 rounded-md border-secondary/80"
				/>
				<span>Blog</span>
			</h2>
			<p className="subtitle">Guides, references, and tutorials.</p>
		</div>
		<div className="flex flex-col items-start">
			{blogs.map((blog) => (
				<a
					key={blog.title}
					href={blog.link}
					className="flex flex-col mb-4 hover:bg-secondary/5 py-1 px-0.5 rounded-md transition-all duration-300"
				>
					<p className="text-secondary/60">{blog.published}</p>
					<h3 className="text-blue-400 text-lg font-bold underline decoration-secondary decoration-dotted decoration-2 underline-offset-7">
						{blog.title}
					</h3>
				</a>
			))}
		</div>
	</article>
);
