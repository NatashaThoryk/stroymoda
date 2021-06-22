import React from 'react';
import classes from './styles.module.scss';
import classesMain from "styles/main.module.scss";


export default ({src = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.section_slide}>
				<img src={src} alt="image"/>
			</div>
		</div>
	)
}
