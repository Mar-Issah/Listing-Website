import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Hello</h1>
			<Link href="/people-listing">
				<a>See People Listing</a>
			</Link>
		</div>
	);
}
