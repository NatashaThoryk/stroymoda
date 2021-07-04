import classes from './map.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';

const Map: React.FC<IProps> = ({src = ''}) => {
	return (
		<div className={classesMain.container}>
			<div className={classes.wrap_map}>
				<img className={classes.map} src={src} alt=""/>
			</div>
		</div>
	)
};

export default Map;
