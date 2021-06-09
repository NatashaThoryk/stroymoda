import UAParser from 'ua-parser-js';
import { breakPoints } from '../const';
import { useMediaQuery } from './useMediaQuery';

const useDeviceType = (userAgent: string) => {
	const isMobile = useMediaQuery(`(max-width: ${breakPoints.MOBILE}px)`, {
		ssrMatchMedia() {
			const device = (new UAParser(userAgent)).getDevice();
			const matches = device.type === 'mobile';
			return { matches };
		},
	});

	const isTablet = useMediaQuery(`(max-width: ${breakPoints.TABLET}px) and (min-width: ${breakPoints.MOBILE + 1}px)`, {
		ssrMatchMedia() {
			const device = (new UAParser(userAgent)).getDevice();
			const matches = device.type === 'tablet';
			return { matches };
		},
	});

	const isDesktop = !isMobile && !isTablet;

	return {
		isMobile,
		isTablet,
		isDesktop,
	};
};

export default useDeviceType;
