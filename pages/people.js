import Head from "next/head";
import styles from "../styles/People.module.css";

//getStaticProps below is the fxn to fetch the data this fxn runs and get the data before the jsx is rendered

//it is an sync/await fxn. it wait for the fetch data from the url endpoint

// it also wait for the data to be converted to json

//after that the fxn will return the data. but we want it to be an object props and to be assign to the people property which we will destructure and use in our jsx

//

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
				{people.map((person) => (
					<div className={styles.single} key={person.id}>
						<a>
							<h3>{person.name}</h3>
						</a>
					</div>
				))}
			</div>
		</>
	);
};

export default People;
