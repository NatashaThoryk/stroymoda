import React from 'react';
import classes from './styles.module.scss';
import classesMain from "styles/main.module.scss";

export default ({img = [] }) => {
	return (
		<div className={classesMain.container}>
			<ul className={classes.wrapper}>
				{img.map((item: any) => (
					<li>
						<img src={item.src} alt=""/>
					</li>
				))}
			</ul>
		</div>
	)
}
