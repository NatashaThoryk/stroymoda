
export interface IProps {
	title?:string;
	logo?: string;
	img?: string;
	href?: string;
	links?: {
		link: string;
		title: string;
		logo: string;
		hash?: string;
	}[];
}

