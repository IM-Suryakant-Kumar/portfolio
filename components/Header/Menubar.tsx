"use client";

import { useState } from "react";
import { links } from "@/lib";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menubar = () => {
	const pathname = usePathname();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<div className="ml-auto lg:order-1 lg:w-full">
			<div
				className="md:hidden flex flex-col justify-center items-end gap-1 hover:bg-secondary/10 p-2 rounded-md cursor-pointer"
				onClick={toggleMenu}
			>
				{showMenu ? (
					<MdClose className="w-6 h-6 text-secondary/90" />
				) : (
					<MdMenu className="w-6 h-6 text-secondary/90" />
				)}
			</div>
			<ul
				className={`w-full bg-primary fixed top-15 left-0 right-0 bottom-0 border-t flex flex-col items-center gap-2 border-secondary/10 pt-8 md:static md:flex md:flex-row md:gap-4 md:border-0 md:p-0 ${
					showMenu ? "" : "hidden"
				}`}
			>
				{links.map(({ name, href }) => (
					<li key={href}>
						<Link
							className={`block text-lg bg-primary hover:bg-secondary/10 text-secondary hover:text-secondary px-3 py-2 leading-relaxed rounded-md ${
								pathname === href ? "bg-secondary/10" : ""
							}`}
							href={href}
							onClick={() => setShowMenu(false)}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
