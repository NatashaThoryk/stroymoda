import React from 'react';
import classes from './styles.module.scss';


export default ({checkList = []}) => {
	return (
		<ul className={classes.list_check}>
			{checkList.map((item: any) => (
				<li className={classes.item}>
					<img src={item.src} alt="image"/>
					<p>{item.text}</p></li>
			))}
		</ul>
	)
}
