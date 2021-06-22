import React from 'react';
import classes from './styles.module.scss';
import toVal from "../../helpers/clsx";


export default ({src = '', text = '', text1 = ''}) => {
	return (

				<div className={classes.sustainability_block}>
					<div className={toVal(classes.in_content, classes.in_content_image)}>
						<img src={src} alt="logotype"/>
					</div>
					<div>
						<p className={classes.prev_text}>{text}</p>
						<p className={classes.prev_text}>{text1}</p>
					</div>
				</div>
	)
}
