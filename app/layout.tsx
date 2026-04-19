import type { Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Sidebar } from "@/components/Sidebar";

const josefin = Josefin_Sans({
	variable: "--font-josefin",
	subsets: ["latin"],
});

const cinzel = Cinzel({
	variable: "--font-cinzel",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Suryakant | Portfolio",
	description:
		"Hi, I'm Suryakant. I am a Frontend Developer. this is my portfolio. where you can explore my projects, blogs and skills and my learning journey.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${josefin.variable} ${cinzel.variable} antialiased`}>
				<Header />
				<Sidebar />
				<div className="mt-15 lg:mt-0 lg:ml-65">
					<div className="p-4">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
