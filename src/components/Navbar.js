import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div>
				{/* <Image
					src="https://res.cloudinary.com/dytnpjxrd/image/upload/v1634323727/teamwork-logo_oruxk1.jpg"
					height={77}
					width={120}
				/> */}
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
