import { IPageMeta } from 'interfaces/pageMeta';

export interface IProps {
	title?: string;
	fullWidth?: boolean;
	rootClassName?: string;
	hideExtraInfo?: boolean;
	pageMeta?: IPageMeta;
}
