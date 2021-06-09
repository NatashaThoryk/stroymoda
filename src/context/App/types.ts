export interface IValueAppContext {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	userAgent: string;
}

export interface IProps {
	userAgent: string;
}
