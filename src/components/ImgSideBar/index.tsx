import classes from './imgSideBar.module.scss';
import React from 'react';

const ImgSideBar = ({src = ''}) => {
	return (
		<img src={src} className={classes.image} alt="image"/>
	);
};

export default ImgSideBar;
