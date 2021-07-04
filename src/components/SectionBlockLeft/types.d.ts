
export interface IProps {
	title?:string;
	text1?:string;
	text2?:string;
	link?:string;
	btnName?:string;
	customClass?:string;
	dotsClass?:string;
	dotsClassItem?:string;
	slides?: IListItems[];
}

interface IListItems {
	title: string;
	text1: string;
	slides: string[];
}


