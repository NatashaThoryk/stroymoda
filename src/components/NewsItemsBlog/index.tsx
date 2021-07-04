import classes from './newsItemsBlog.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';

const NewsItemsBlog: React.FC<IProps> = ({title = '', src = '', link = ''}) => {

	return (
		<div className={classes.main_item}>
			<Link href={link}><a className={classes.image_list}>
				<img src={src} alt="image"/>
			</a></Link>
			<Link href={link}>
				<a className={classes.detail}>
					<h3 className={classes.title}>{title}</h3>
					<span className={classesMain.select_text}>Blog</span></a>
			</Link>
		</div>
	)
};

export default NewsItemsBlog;

