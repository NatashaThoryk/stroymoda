import React from 'react';
import classes from './styles.module.scss';


export default ({socialList = []}) => {
	return (
		<div className={classes.social_media}>
			<p>Share on social media</p>
			<ul>
				{socialList.map((item: any) => (
					<li>
						<a href={item.link} target="_blank"><img src={item.src} alt="icon"/></a>
					</li>
						))}
			</ul>
		</div>
	)
}
