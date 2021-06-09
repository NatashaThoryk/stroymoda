import React from 'react';

interface IOptions {
	defaultMatches?: boolean;
	noSsr?: boolean;
	ssrMatchMedia?(query: string): {matches: boolean};
}

export const useMediaQuery = (queryInput: string, options: IOptions = {}): boolean => {

	const query = queryInput.replace(/^@media( ?)/m, '');
	const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
	const matchMedia = supportMatchMedia ? window.matchMedia : () => ({matches: false});

	const {
		defaultMatches = false,
		noSsr = false,
		ssrMatchMedia = () => ({matches: false}),
	} = {
		...options,
	};

	const [match, setMatch] = React.useState(() => {
		if (noSsr && supportMatchMedia) {
			return matchMedia(query).matches;
		}
		if (ssrMatchMedia) {
			return ssrMatchMedia(query).matches;
		}

		return defaultMatches;
	});

	React.useEffect(() => {
		let active = true;
		if (!supportMatchMedia) {
			return undefined;
		}
		const queryList: any = matchMedia(query);
		const updateMatch = () => {
			if (active) {
				setMatch(queryList.matches);
			}
		};
		updateMatch();
		queryList.addListener(updateMatch);
		return () => {
			active = false;
			queryList.removeListener(updateMatch);
		};
	}, [query, matchMedia, supportMatchMedia]);

	return match;
};
