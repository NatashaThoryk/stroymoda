
export const makeURIParams = (query: { [key: string]: any } = {}): string => {
	const data: any[] = Object.entries(query);
	return data.reduce((acc, el) => {
		if (el[1]) acc.push(el.join('='));
		return acc;
	}, []).join('&');
};
