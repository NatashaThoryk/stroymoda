interface IListItems {
	src: string;
	text: string;
}

interface IListItems1 {
	src: string;
	text: string;
}

export interface IProps {
	list: IListItems[];
	list1: IListItems1[];
	title: string;
	customClass?: string;
}

