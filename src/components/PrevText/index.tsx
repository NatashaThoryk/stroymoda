import classes from './prevText.module.scss';
import { IProps } from './types';
import React from 'react';

const PrevText: React.FC<IProps> = ({text1 = '', text2 = ''}) => {
	return (
		<>
			<p className={classes.prev_text}>{text1}</p>
			{
				text2 && text2.length && (
					<p className={classes.prev_text}>{text2}</p>
				)
			}
		</>
	);
};

export default PrevText;
