interface IListItem {
	img: string;
	title: string;
	desc: string;
}

export interface IProps {
	list: IListItem[];
}
