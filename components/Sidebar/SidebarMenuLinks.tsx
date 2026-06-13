"use client";

import { links } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarMenuLinks = () => {
	const pathname = usePathname();

	return (
		<ul className="flex flex-col gap-0.5">
			{links.map(({ name, href }) => (
				<li key={href}>
					<Link
						className={`block text-lg bg-primary hover:bg-secondary/10  hover:text-secondary p-1 leading-relaxed rounded-md ${
							pathname === href
								? "bg-secondary/10 text-secondary"
								: "text-secondary/70"
						}`}
						href={href}
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
};
