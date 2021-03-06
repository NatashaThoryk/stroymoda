import classes from './sustainabilityMainBlock.module.scss';
import { IProps } from './types';
import React from 'react';
import toVal from '../../helpers/clsx';


const SustainabilityMainBlock: React.FC<IProps> = ({src = '', text = '', text1 = ''}) => {
	return (

				<div className={classes.sustainability_block}>
					<div className={toVal(classes.in_content, classes.in_content_image)}>
						<img src={src} alt="logotype"/>
					</div>
					<div>
						<p className={classes.prev_text}>{text}</p>
						{
							text1 && text1.length && (
								<p className={classes.prev_text}>{text1}</p>
							)
						}
					</div>
				</div>
	);
};

export default SustainabilityMainBlock;
