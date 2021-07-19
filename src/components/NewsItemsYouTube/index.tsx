import classes from './NewsItemsYouTube.module.scss';
import { IProps } from './types';
import React from 'react';

const NewsItemsYouTube: React.FC<IProps> = ({link = ''}) => {

	return (
		<div className={classes.main_item}>
				<iframe width="100%" height="100" src={link}
						title="YouTube video player" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
		</div>
	)
};

export default NewsItemsYouTube;

