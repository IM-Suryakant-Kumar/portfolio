import { blogs } from "@/lib";
import Image from "next/image";

export const Blogs = () => (
	<article className="flex flex-col justify-center gap-4 mt-10">
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
		<div className="">
			{blogs.map((blog) => (
				<a
					key={blog.title}
					// href={blog.link}
					className="flex flex-col mb-4"
				>
					<p className="text-secondary/60">
						{blog.des}
					</p>
					<h3 className="text-blue-400 text-lg font-bold underline decoration-secondary decoration-dotted decoration-2 underline-offset-7">{blog.title}</h3>
				</a>
			))}
		</div>
	</article>
);
