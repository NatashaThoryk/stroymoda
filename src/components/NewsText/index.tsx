import React from 'react';
import classes from './styles.module.scss';
import classesMain from "styles/main.module.scss";

export default ({title = '', text = '', text1 = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.wrapper}>
				<h4>{title}</h4>
				<p className={classes.prev_text}>{text}</p>
				<p className={classes.prev_text}>{text1}</p>
			</div>
		</div>
	)
}
