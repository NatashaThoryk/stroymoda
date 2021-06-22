import React from 'react';
import classes from './styles.module.scss';
import toVal from "../../helpers/clsx";


export default ({title = '', list = []}) => {
	return (
		<div className={classes.slider_wrap}>
			<div className={classes.container}>
				<div className={toVal(classes.section_slide, classes.btm_dots)}>
					<img src="/img/slider/1.jpg" alt=""/>
					{/*<Slider list={sliderList1 as any} isVideo/>*/}
				</div>
				<div className={classes.section_text}>
					<h3 className={classes.title}>{title}</h3>
					<ul className={classes.list_check}>
						{list.map((item: any) => (
							<li className={classes.item}>
								<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
										fill="#646677"/>
								</svg>
								<p>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
