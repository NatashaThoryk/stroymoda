import classes from './styles.module.scss';
import classesMain from 'pages/index.module.scss';
import React from 'react';


const NewsImageBlock = ({src = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.section_slide}>
				<img src={src} alt="image"/>
			</div>
		</div>
	)
};


export default NewsImageBlock;
