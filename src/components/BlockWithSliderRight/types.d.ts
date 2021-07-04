
export interface IProps {
	title: string;
	listItem: IListItems[];
	slides: string[];
	customClass?: string;
	isVideo?: boolean;
	dotsClass?: string;
	dotsClassItem?: string;
}

interface IListItems {
	item: string;
}


