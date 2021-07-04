import classes from './newsText.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';

const NewsText: React.FC<IProps> =({title = '', text = '', text1 = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.wrapper}>
				<h4>{title}</h4>
				<p className={classes.prev_text}>{text}</p>
				{
					text1 && text1.length && (
						<p className={classes.prev_text}>{text1}</p>
					)
				}
			</div>
		</div>
	)
};

export default NewsText;
