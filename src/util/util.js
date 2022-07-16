export const parseQuery = (queryString) => {
	let decoded = decodeURI(queryString);
	if (decoded.startsWith('?')) decoded = decoded.substring(1);
	const queries = decoded.split('&');
	return queries.reduce((acc, val, idx) => {
		const keyValue = val.split('=');
		if(keyValue.length < 2) return acc;

		acc[keyValue[0]] = keyValue[1];
		return acc;
	}, {});
}