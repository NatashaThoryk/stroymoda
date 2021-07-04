import classes from './projectsImg.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';

const ProjectImg: React.FC<IProps> = ({title = ' ', img = '', link = '', size = '', loc = '', architect = '', isNew = false }) => {

	return (
		<Link href={link}>
			<div className={classes.main_item}>
				<div className={classes.image_list}>
					<img src={img} alt="image"/>
					<div className={classes.text_inside}>
						{
							isNew && (
								<div className={classes.new}>new</div>
							)
						}
						<ul className={classes.text}>
							<li>SIZE: {size}</li>
							<li>LOCATION: {loc}</li>
							<li>ARCHITECT: {architect}</li>
						</ul>
					</div>
				</div>
				<Link href={link}><a className={classes.title}>{title}</a></Link>
			</div>
		</Link>
	)
};

export default ProjectImg;
