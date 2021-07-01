import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";

export default ({list = []}) => {
	return (
			<div className={classesMain.content_wrapper}>
				<h3 className={classesMain.title}>Charity and sponsorship</h3>
				<p className={classes.subtitle}>To extend our social profile Stroymoda is linked to several social initiatives and projects by means of charity and sponsoring.</p>
				<div className={classes.list}>
					{list.map((item: any) =>
						<div className={classes.item}>
							<img src={item.img} alt="image"/>
							<h4>{item.title}</h4>
							<span>{item.desc}</span>
					</div>)}
				</div>
			</div>
	)
}
