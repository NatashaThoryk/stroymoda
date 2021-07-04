interface IListItems {
	link: string;
	text: string;
}

interface IListItems1 {
	link: string;
	text: string;
}

export interface IProps {
	items: IListItems[];
	items1: IListItems1[];
	title: string;
}

