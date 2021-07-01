import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";


export default ({src = '', link = '', title = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.new_blog}>
				<img src={src} alt="image"/>
				<a href={link} className={classes.detail}>
					<h3 className={classesMain.title}>{title}</h3>
					<span className={classesMain.select_text}>Blog</span></a>
			</div>
		</div>
	)
}
