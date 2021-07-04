import classes from './stepList.module.scss';
import { IProps } from './types';
import React from 'react';


const StepList: React.FC<IProps> = ({stepList = []}) => {
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
	);
};

export default StepList;
