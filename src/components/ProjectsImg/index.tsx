import React from 'react';
import classes from "./styles.module.scss";

export default ({title = ' ', img = '', link = '', size = '', loc = '', architect = '', isNew = false }) => {

	return (
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
			<a href={link} className={classes.title}>{title}</a>
		</div>
	)
}
