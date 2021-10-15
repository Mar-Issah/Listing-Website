import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>People List | Home</title>
				<meta name="keywords" content="people" />
			</Head>
			<div className={styles.container}>
				<Link href="/">
					<h1 className={styles.title}>Homepage</h1>
				</Link>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
					impedit suscipit architecto, odio inventore nostrum non neque dicta.
					Quam magni accusantium culpa distinctio tempore iure accusamus,
					dolorem nobis odit.
				</p>
				<br />
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
					impedit suscipit architecto, odio inventore nostrum non neque dicta.
					Quam magni accusantium culpa distinctio tempore iure accusamus,
					dolorem nobis odit.
				</p>
				<Link href="/people/">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
