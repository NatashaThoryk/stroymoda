import { useEffect, useRef } from 'react';
import { isEqual } from 'underscore';

const useDeepCompareMemoize = (value: any) => {
	const ref = useRef();
	if (!isEqual(value, ref.current)) {
		ref.current = value;
	}
	return ref.current;
};

export const useDeepCompareEffect = (callback: () => void, dependencies: any) => {
	useEffect(callback, useDeepCompareMemoize(dependencies));
};
