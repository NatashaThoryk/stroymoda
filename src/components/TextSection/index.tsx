import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";


export default ({title = '', text = '', customClass = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes[customClass]}>
				<h3 className={classesMain.title}>{title}</h3>
				<p className={classes.prev_text}>{text}</p>
			</div>
		</div>
	)
}
