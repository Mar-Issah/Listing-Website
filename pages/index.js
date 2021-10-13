import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Hello</h1>
			<Link href="/people-listing">
				<a>See People Listing</a>
			</Link>
			<Footer />
		</div>
	);
}
