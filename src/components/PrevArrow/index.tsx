import classes from './prevArrow.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';
import {useAppContext} from '../../context/App';

const PrevArrow: React.FC<IProps> = ({link = '', btnTitle = '', arrowMobile = '', arrowDesk = ''}) => {
	const {isMobile} = useAppContext();

	return (
		<Link href={link}>
			{isMobile
				? (
					<a className={classes.arrow_mob}>{btnTitle}<img className={classes.arrow_mob} src={arrowMobile} alt="icon"/></a>
				)
				: (
					<a className={classes.arrow}><img className={classes.arrow_desk} src={arrowDesk} alt="icon"/>{btnTitle}</a>
				)}
		</Link>
	);
};

export default PrevArrow;
