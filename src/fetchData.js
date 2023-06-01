export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '714f847491mshca6fec916ab199ap17924bjsnd87476783224',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}