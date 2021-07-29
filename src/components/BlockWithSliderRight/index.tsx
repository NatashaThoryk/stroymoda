import classes from './blockWithSliderRight.module.scss';
import React from 'react';
import {IProps} from './types';
import Slider from "components/Slider";
import toVal from "../../helpers/clsx";


const BlockWidthSliderRight: React.FC<IProps> = ({title = '', listItem = [], slides = [], customClass = '', isVideo = false, dotsClass = 'slideRightDots', dotsClassItem = 'slideRightDotsItem'}) => {
	return (
		<div className={classes[customClass]}>
			<div className={classes.container}>
				<div className={toVal(classes.section_slide, classes.btm_dots)}>
					<Slider dotsClassItem={dotsClassItem} dotsClass={dotsClass} list={slides as any} isVideo={isVideo}/>
				</div>
				<div className={classes.section_text}>
					<h3 className={classes.title}>{title}</h3>
					<ul className={classes.list_check}>
						{listItem.map((item: any) => (
							<li className={classes.item}>
								<img src="/img/products/check.svg" alt="icon"/>
								<p>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BlockWidthSliderRight;
