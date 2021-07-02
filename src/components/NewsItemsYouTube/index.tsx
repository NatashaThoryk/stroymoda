import classes from './styles.module.scss';
import React from 'react';

const NewsItemsYouTube = ({link = ''}) => {

	return (
		<div className={classes.main_item}>
				<iframe width="580" height="323" src={link}
						title="YouTube video player" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
		</div>
	)
};

export default NewsItemsYouTube;

