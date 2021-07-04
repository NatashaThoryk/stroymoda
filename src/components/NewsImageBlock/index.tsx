import classes from './newsImageBlock.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';


const NewsImageBlock: React.FC<IProps> = ({src = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.section_slide}>
				<img src={src} alt="image"/>
			</div>
		</div>
	);
};


export default NewsImageBlock;
