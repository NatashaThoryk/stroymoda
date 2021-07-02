import classes from './styles.module.scss';
import classesMain from 'pages/index.module.scss';
import React from 'react';

const Map = ({src = ''}) => {
	return (
		<div className={classesMain.container}>
			<div className={classes.wrap_map}>
				<img className={classes.map} src={src} alt=""/>
			</div>
		</div>
	)
};

export default Map;
