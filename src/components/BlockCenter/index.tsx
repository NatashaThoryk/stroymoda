import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";
import toVal from "../../helpers/clsx";


export default ({title = '', text = ''}) => {
	return (
		<div className={classes.article_block}>
			<div className={classesMain.content_wrapper}>
				<div className={toVal(classes.info_content, classes.info_content_bottom)}>
					<h2 className={classesMain.title_cap}>{title}</h2>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}
