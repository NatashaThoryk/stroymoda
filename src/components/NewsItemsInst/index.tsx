import classes from './newsItemsInst.module.scss';
import { IProps } from './types';
import React from 'react';

const NewsItemsInst: React.FC<IProps> = ({src = '', textInside = '', count = '', onHandler = () => {}}) => {

	return (
		<div className={classes.main_item} onClick={onHandler}>
			<div className={classes.image_list}>
				<img src={src} alt="image"/>
				<div className={classes.text_inside}>
						<div className={classes.wrap}>
							<p>{textInside}</p>
							<div>
								<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.5 12L5.5575 11.1368C2.21 8.08283 0 6.06866 0 3.59673C0 1.58256 1.573 0 3.575 0C4.706 0 5.7915 0.5297 6.5 1.36676C7.2085 0.5297 8.294 0 9.425 0C11.427 0 13 1.58256 13 3.59673C13 6.06866 10.79 8.08283 7.4425 11.1433L6.5 12Z" fill="white"/>
								</svg>
								<span>{count}</span>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
};

export default NewsItemsInst;

