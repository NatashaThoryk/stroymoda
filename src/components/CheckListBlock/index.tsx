import classes from './checkListBlock.module.scss';
import { IProps } from './types';
import React from 'react';

const CheckList: React.FC<IProps> = ({checkList = []}) => {
	return (
		<ul className={classes.list_check}>
			{checkList.map((item: any) => (
				<li className={classes.item}>
					<img src={item.src} alt="image"/>
					<p>{item.text}</p></li>
			))}
		</ul>
	);
};

export default CheckList;
