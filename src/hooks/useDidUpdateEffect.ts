import { useEffect, useRef } from 'react';

export const useDidUpdateEffect = (callback: () => void, dependencies: any) => {
	const didMountRef = useRef(false);
	useEffect(() => {
		if (didMountRef.current) {
			callback();
		} else {
			didMountRef.current = true;
		}
	}, dependencies);
};
