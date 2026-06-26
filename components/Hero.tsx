import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

export const Hero = () => (
	<article className="flex flex-col justify-center gap-6">
		<h1 className="text-orange-400 text-3xl sm:text-4xl leading-relaxed flex flex-col sm:flex-row">
			<div className="font-cinzel font-semibold text-shadow-md">Hi 👋!</div>{" "}
			<div className="font-cinzel font-semibold text-shadow-md">
				I&apos;m Suryakant
			</div>
		</h1>
		<h2 className="text-orange-500 text-xl sm:text-2xl font-cinzel font-semibold text-shadow-md">
			A Frontend Web Developer
		</h2>
		<p className="text-secondary/70 text-lg sm:w-3/4">
			I&apos;m a full stack web developer, passionate about creating responsive and user-friendly web applications. I&apos;ve been making websites since 2021 and writing on this blog!
		</p>
		<p className="text-secondary/70 text-lg sm:w-3/4">Everything on this site is written by me, not AI.</p>
		<div className="flex items-center gap-6 my-8">
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
	</article>
);
