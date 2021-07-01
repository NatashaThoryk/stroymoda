import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";

export default ({text = ''}) => {
	return (
		<div className={classes.quote}>
			<div className={classesMain.content_wrapper}>
				<div className={classes.section_slide}>
					<p className={classes.quote_text}>{text}</p>
				</div>
			</div>
		</div>
	)
}
