import classes from './topFixedBlock.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';
import {useAppContext} from '../../context/App';


const TopFixedBlock: React.FC<IProps>  = ({title = '', link = '', arrowMobile = '', arrowDesk = ''}) => {
	const {isMobile, isTablet} = useAppContext();

	return (
		<div className={classes.top}>
			<h2 className={classesMain.title_cap}>{title}</h2>
			<Link href={link}>
				{isMobile || isTablet
					? (
						<a><img className={classes.arrow_mob} src={arrowMobile} alt="icon"/>
						Back to Products</a>
					)
					: (
						<a>Back to Products <img className={classes.arrow_desk} src={arrowDesk} alt="icon"/></a>
					)}
			</Link>
		</div>
	);
};

export default TopFixedBlock;
