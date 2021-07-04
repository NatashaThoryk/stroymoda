import classes from './sectionBlockLeft.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';
import Slider from 'components/Slider';


const SectionBlockLeft: React.FC<IProps> = ({title = '', text1 = '', text2 = '', link = '', btnName = '', customClass = '', slides = [], dotsClass= 'slideRightDots', dotsClassItem= 'slideRightDotsItem'}) => {
	return (
		<div className={classes[customClass]}>
			<div className={classes.section_text}>
				<h3 className={classes.title}>{title}</h3>
				<p className={classes.prev_text}>{text1}</p>
				<p className={classes.prev_text}>{text2}</p>
				<Link href={link}>
					<a className={classesMain.btn_learn}>{btnName}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
							 xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0)">
								<path
									d="M8.12931 7.56102L0.741146 0.172852C0.496557 -0.0633678 0.106803 -0.0565857 -0.129416 0.188003C-0.359864 0.426603 -0.359864 0.80485 -0.129416 1.04341L6.82347 7.9963L-0.129416 14.9492C-0.369784 15.1896 -0.369784 15.5793 -0.129416 15.8197C0.111024 16.0601 0.500742 16.0601 0.741146 15.8197L8.12931 8.43158C8.36968 8.19114 8.36968 7.80142 8.12931 7.56102Z"
									fill="#DC3143"/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="16" height="16" fill="white"/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</Link>
			</div>
			<div className={classes.section_slide}>
				<Slider dotsClassItem={dotsClassItem} dotsClass={dotsClass} list={slides as any}/>
			</div>
		</div>
	);
};

export default SectionBlockLeft;
