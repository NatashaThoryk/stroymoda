import classes from './paramFixBlock.module.scss';
import { IProps } from './types';
import React from 'react';

const ParamBlock: React.FC<IProps> = ({list = []}) => {
	return (
		<ul className={classes.list}>
			{list.map((item: any) => (
				<li className={classes.item}>
					<p>{item.text}</p>
					<p className={classes.param}>{item.param}</p>
				</li>
			))}
		</ul>
	);
};

export default ParamBlock;
