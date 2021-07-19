import classes from './textSection.module.scss';
import { IProps } from './types';
import React from 'react';
import toVal from "../../helpers/clsx";
import classesMain from "../../pages/index.module.scss";


const TextSection: React.FC<IProps>  = ({title = '', text = '', text2= '', customClass = '', isCenter = false}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes[customClass]}>
				{isCenter
					? (
						<h3 className={classes.title}>{title}</h3>
					)
					: (
						<h3 className={toVal(classes.title,classes.title_start)}>{title}</h3>


					)}
				<p className={classes.prev_text}>{text}</p>

				{
					text2 && text2.length && (
						<p className={toVal(classes.prev_text,classes.prev_bottom)}>{text2}</p>
					)
				}
			</div>
		</div>
	);
};

export default TextSection;
