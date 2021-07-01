import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";

export default ({src = ''}) => {
	return (
		<div className={classesMain.container}>
			<div className={classes.wrap_map}>
				<img className={classes.map} src={src} alt=""/>
			</div>
		</div>
	)
}
