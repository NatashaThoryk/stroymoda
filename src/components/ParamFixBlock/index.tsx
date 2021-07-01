import React from 'react';
import classes from './styles.module.scss';


export default ({list = []}) => {
	return (
		<ul className={classes.list}>
			{list.map((item: any) => (
				<li className={classes.item}>
					<p>{item.text}</p>
					<p className={classes.param}>{item.param}</p>
				</li>
			))}
		</ul>
	)
}
