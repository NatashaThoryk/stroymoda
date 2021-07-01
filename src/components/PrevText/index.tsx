import React from 'react';
import classes from './styles.module.scss';


export default ({text1 = '', text2 = ''}) => {
	return (
		<>
			<p className={classes.prev_text}>{text1}</p>
			{
				text2 && text2.length && (
					<p className={classes.prev_text}>{text2}</p>
				)
			}
		</>
	)
}
