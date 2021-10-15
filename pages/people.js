import Head from "next/head";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { people: data },
	};
};
const People = ({ people }) => {
	return (
		<>
			<Head>
				<title>People List | People</title>
				<meta name="keywords" content="people" />
			</Head>
			<div>
				<h1>All People </h1>
				{people.map((person) => person)}
			</div>
		</>
	);
};

export default People;
