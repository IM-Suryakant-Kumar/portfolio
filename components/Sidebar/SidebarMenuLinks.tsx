"use client";

import { links } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarMenuLinks = () => {
	const pathname = usePathname();

	return (
		<ul className="flex flex-col gap-0.5">
			{links.map(({ name, href, icon }) => (
				<li key={href}>
					<Link
						className={`flex items-center gap-2 text-lg bg-primary hover:bg-secondary/10  hover:text-secondary p-1 leading-relaxed rounded-md ${
							pathname === href
								? "bg-secondary/10 text-secondary"
								: "text-secondary/70"
						}`}
						href={href}
					>
						<Image
							src={icon}
							alt={name}
							width={25}
							height={25}
							className="border-2 rounded-md border-secondary/80 p-1"
						/>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
};
