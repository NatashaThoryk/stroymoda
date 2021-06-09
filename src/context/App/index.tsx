import useDeviceType from 'hooks/useDeviceType';
import React, { useContext } from 'react';
import { IProps, IValueAppContext } from './types';

export const AppContext: any = React.createContext({});
export const useAppContext = () => useContext<IValueAppContext>(AppContext);

const Provider: React.FC<IProps> = ({ userAgent, children }) => {
	const { isMobile, isTablet, isDesktop } = useDeviceType(userAgent);

	return (
		<AppContext.Provider value={{
			isMobile,
			isTablet,
			isDesktop,
			userAgent,
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default Provider;
