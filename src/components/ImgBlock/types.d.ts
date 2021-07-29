
export interface IProps {
	title?:string;
	logo?: string;
	img?: string;
	href?: string;
	onClick?: void;
	links?: {
		link: string;
		title: string;
		logo: string;
		hash?: string;
	}[];
}

