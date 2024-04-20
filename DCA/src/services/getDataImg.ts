export async function getDataImg() {
	try {
		const data = await fetch(`https://cataas.com/cat/says/:$(hola)`).then((res) => res.json());
		console.log(data);
		return data.results;
	} catch (error) {
		console.log(error);
	}
}

