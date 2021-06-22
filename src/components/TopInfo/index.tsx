import React from 'react';
import classes from './styles.module.scss';


export default ({title = '', link = ''}) => {
	return (
		<div className={classes.top_center}>
			<img src={link} alt="logo"/>
			<h2 className={classes.title_cap}>{title}</h2>
		</div>
	)
}
