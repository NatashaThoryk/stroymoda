import classes from './blockCenter.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';
import toVal from '../../helpers/clsx';

const BlockCenter: React.FC<IProps> = ({title = '', text = ''}) => {
	return (
		<div className={classes.article_block}>
			<div className={classesMain.content_wrapper}>
				<div className={toVal(classes.info_content, classes.info_content_bottom)}>
					<h2 className={classesMain.title_cap}>{title}</h2>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default BlockCenter;
