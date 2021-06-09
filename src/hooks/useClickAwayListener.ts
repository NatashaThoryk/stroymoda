import { RefObject, useEffect } from 'react';

export function useClickAwayListener(ref: RefObject<any>, callback: () => void) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent | TouchEvent) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}
