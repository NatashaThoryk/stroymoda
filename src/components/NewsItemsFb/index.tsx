import classes from './styles.module.scss';
import classesMain from 'pages/index.module.scss';
import React from 'react';

const NewsItemsFb = ({title = '', src = '', link = ''}) => {
	return (
		<div className={classes.main_item}>
			<a href={link} className={classes.image_list}>
				<img src={src} alt="image"/>
			</a>
			<a href={link} className={classes.detail}>
				<h3 className={classes.title}>{title}</h3>
				<span className={classesMain.select_text}>Facebook</span></a>
		</div>
	)
};

export default NewsItemsFb;

