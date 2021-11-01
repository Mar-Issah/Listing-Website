export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	// map data to an array of path objects with params (id).
	const paths = data.map((people) => {
		return {
			params: { id: people.id.toString() },
		};
	});

	// so return the paths fxn above which will be saved in paths. basically the id will now be stored in paths. when the user clicks on the each person it will look through the paths array and pick the id and return a page using the params we created ie [id]

	//now that we have 10 id next will create 10 routes and 10 pages/html

	//fallback: something on which one can fall back to fall back on something. for now lets use false which will call the 404 page when the page is not found
	return {
		paths,
		fallback: false,
	};
};

//create obj. for each array item and pass into component
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: { person: data },
	};
};

const Details = ({ person }) => {
	return (
		<div>
			<h1>{person.name}</h1>
			<p>{person.email}</p>
			<p>{person.website}</p>
			<p>{person.address.city}</p>
		</div>
	);
};

export default Details;
