import { notes } from "@/lib";

const page = () => {
	return (
		<div className="min-h-[calc(100vh-60px)] md:min-h-screen flex justify-center items-center text-center">
			{notes.length > 0 ? (
				<>page</>
			) : (
				<div className="flex justify-center items-center text-center text-secondary/70 text-2xl md:text-3xl font-cinzel font-semibold">
					No notes available.
				</div>
			)}
		</div>
	);
};

export default page;
