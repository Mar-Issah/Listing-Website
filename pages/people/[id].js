export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	//we could write it this way but it is tedious to return each id for every pesrson so below is more concise as it map over the data and return the id
	// return {
	// 	paths: [ {params: {id}},{},{},{}]
	// }
	// map data to an array of path objects with params (id)
	const paths = data.map((people) => {
		return {
			params: { id: people.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

const Person = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	);
};

export default Person;
