import classes from './partnersSection.module.scss';
import classesMain from 'styles/main.module.scss';
import { IProps } from './types';
import React from 'react';

const PartnersSection: React.FC<IProps> = ({img = [] }) => {
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
	);
};

export default PartnersSection;
