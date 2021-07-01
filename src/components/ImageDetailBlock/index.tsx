import React from 'react';
import classes from "./styles.module.scss";

export default ({imgList = []}) => {
	return (
		<div className={classes.images_detail}>
			{imgList.map((item: any) => (
				<img src={item.src} alt="image"/>
			))}
		</div>
	)
}
