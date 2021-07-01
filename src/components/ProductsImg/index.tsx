import React from 'react';
import classes from "./styles.module.scss";

export default ({title = '', hrefMore = '', img = '', type = '', weight = '', dimensions = '', isInfo = true}) => {

	return (
		<div className={classes.main_item}>
			<div className={classes.image_list}>
				<img src={img} alt="image"/>
			</div>
			<h3 className={classes.title}>{title}</h3>
			{
				isInfo && (
					<ul className={classes.info}>
						<li>Type: {type}</li>
						<li>Weight: {weight}</li>
						<li>Dimensions: {dimensions}</li>
					</ul>
				)
			}
			<a href={hrefMore} className={classes.moreBtn}>More details</a>
		</div>
	)
}

