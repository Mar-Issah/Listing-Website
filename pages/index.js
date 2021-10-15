import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Hello</h1>
			<Link href="/people-listing">
				<a>See People Listing</a>
			</Link>
		</div>
	);
}
