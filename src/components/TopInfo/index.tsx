import classes from './topInfo.module.scss';
import { IProps } from './types';
import React from 'react';


const TopInfo: React.FC<IProps> = ({title = '', link = ''}) => {
	return (
		<div className={classes.top_center}>
			<img src={link} alt="logo"/>
			<h2 className={classes.title_cap}>{title}</h2>
		</div>
	);
};

export default TopInfo;
