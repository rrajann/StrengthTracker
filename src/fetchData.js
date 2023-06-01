

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_REACT_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}