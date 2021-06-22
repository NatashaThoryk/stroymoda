import React from 'react';
import classes from './styles.module.scss';


export default ({stepList = []}) => {
	return (
		<ul className={classes.step_list}>
				{stepList.map((item: any) => (
						<li className={classes.list}>
							<div className={classes.top}>
								<div className={classes.circle}>
									{item.number}
								</div>
								<div>
									<p>{item.title}</p>
									<p>{item.title1}</p>
								</div>
							</div>
							<img src={item.link} alt="image"/>
						</li>
					))}
		</ul>
	)
}
