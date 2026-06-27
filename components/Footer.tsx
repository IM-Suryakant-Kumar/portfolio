import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

export const Footer = () => {
	return (
		<footer className="p-4 pt-6 border-t-2 border-secondary/10 text-gray-600 leading-relaxed text-sm text-center select-none">
			<div className="flex justify-center items-center gap-6 my-8">
				<a href="https://www.linkedin.com/in/suryakant-kumar/" target="_blank">
					<PiLinkedinLogo size="2em" fill="orange" color="orange" />
				</a>
				<a href="https://github.com/IM-Suryakant-Kumar" target="_blank">
					<VscGithubAlt size="2em" fill="orange" color="orange" />
				</a>
				<a href="https://x.com/Suryakant_91" target="_blank">
					<FaXTwitter size="2em" fill="orange" color="orange" />
				</a>
				<a href="mailto:ksuryakant43@gmail.com" target="_blank">
					<MdMailOutline size="2em" fill="orange" color="orange" />
				</a>
			</div>
			<p>© 2025, all rights reserved</p>
			<p>
				Designed & Built by{" "}
				<span className="text-orange-400 font-cinzel font-semibold">
					Suryakant Kumar
				</span>
			</p>
		</footer>
	);
};
