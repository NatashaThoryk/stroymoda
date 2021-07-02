import classes from './styles.module.scss';
import classesMain from 'styles/main.module.scss';
import React from 'react';

const PartnersSection = ({img = [] }) => {
	return (
		<div className={classesMain.container}>
			<ul className={classes.wrapper}>
				{img.map((item: any) => (
					<li>
						<img src={item.src} alt="logo"/>
					</li>
				))}
			</ul>
		</div>
	)
};

export default PartnersSection;
