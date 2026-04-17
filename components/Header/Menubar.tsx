"use client";

import { useState } from "react";
import { links } from "@/lib";
import { MdClose, MdMenu } from "react-icons/md";

export const Menubar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<>
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
				className={`md:hidden w-full bg-primary fixed top-15 left-0 right-0 bottom-0 border-t flex flex-col items-center border-secondary/10 p-4 ${
					showMenu ? "" : "hidden"
				}`}
			>
				{links.map(({ name, href }) => (
					<li key={href}>
						<a
							className="block text-lg bg-primary hover:bg-secondary/10 text-secondary hover:text-secondary mt-1 px-3 py-2 leading-relaxed rounded-lg"
							href={href}
							onClick={() => setShowMenu(false)}
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};
