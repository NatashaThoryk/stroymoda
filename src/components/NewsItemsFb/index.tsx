import classes from './newsItemsFb.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';

const NewsItemsFb: React.FC<IProps> = ({title = '', src = '', onHandler = () => {}}) => {
	return (
		<div className={classes.main_item} onClick={onHandler}>
			<div className={classes.image_list}>
				<img src={src} alt="image"/>
			</div>
			<div className={classes.detail}>
				<h3 className={classes.title}>{title}</h3>
				<span className={classesMain.select_text}>Facebook</span></div>
		</div>
	)
};

export default NewsItemsFb;

