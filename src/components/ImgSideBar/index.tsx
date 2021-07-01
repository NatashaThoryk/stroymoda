import React from 'react';
import classes from './styles.module.scss';

export default ({src = ''}) => {
	return (
		<img src={src} className={classes.image} alt="image"/>
	)
}
