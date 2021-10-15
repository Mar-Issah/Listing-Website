import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<img src="/public/teamwork-logo-icon-symbol-group-friends-five-happy-motivated-people-friendship-concept-colorful-isolated-white-background-132170158.jpg" />
				</Link>
			</div>
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/people">
					<a>People Listing</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
