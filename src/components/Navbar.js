import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div>
				<Link href="/">
					<h1 className="logo">People Listing</h1>
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
