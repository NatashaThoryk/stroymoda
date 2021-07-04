import classes from './prevArrow.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';

const PrevArrow: React.FC<IProps> = ({link = '', btnTitle = ''}) => {
	return (
		<Link href={link}>
			<a className={classes.arrow}><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.6758 1.58821L2.32284 11L12.6758 20.4117" stroke="#BBBBC2" stroke-width="2"/>
			</svg>{btnTitle}</a>
		</Link>
	);
};

export default PrevArrow;
