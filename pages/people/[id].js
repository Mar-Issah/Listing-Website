export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	//we could write it this way but it is tedious to return each id for every pesrson so below is more concise as it map over the data and return the id
	// return {
	// 	paths: [ {params: {id}},{},{},{}]
	// }
	// map data to an array of path objects with params (id).
	const paths = data.map((people) => {
		return {
			params: { id: people.id.toString() },
		};
	});

	// so return the paths fxn above which will be saved in paths. basically the id will now be stored in paths and used in jsx. when the user clicks on the each person it will look through the paths array and pick the id and return a page using the params we created ie [id]

	//fallback: something on which one can fall back to fall back on something. for now lets use false which will call the 404 page when the page is not found
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
