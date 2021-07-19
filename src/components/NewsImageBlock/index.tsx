import classes from './newsImageBlock.module.scss';
import { IProps } from './types';
import React from 'react';


const NewsImageBlock: React.FC<IProps> = ({src = ''}) => {
	return (
			<div className={classes.section_slide}>
				<img src={src} alt="image"/>
			</div>
	);
};


export default NewsImageBlock;

