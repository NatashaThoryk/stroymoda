import classes from './mainSliderProducts.module.scss';
import {IProps} from './types';
import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../context/App";

const MainSliderProducts: React.FC<IProps> = ({imageTop = '', imageBottom = ''}) => {
	const [slideWidth, setSlideWidth] = useState(0);
	const {isMobile} = useAppContext();

	useEffect(() => {
		setSlideWidth(window.innerWidth / 2);
	}, []);

	const handleMouseMove = (e: any) => {
		const w = e.target.clientWidth;
		setSlideWidth(w - e.screenX);
	};

	return (
		<>
			{isMobile
				? (
					<div className={classes.full_bg_slider}  onTouchMove={handleMouseMove}>
						<div className={classes.full_bg_slider_hand} style={{right: slideWidth}}/>
						<img src={imageBottom} alt="image" className={classes.full_bg_slider_before}/>
						<div style={{width: slideWidth}} className={classes.full_bg_slider_after}>
							<img src={imageTop} alt="image"/>
						</div>
					</div>
				)
				: (
					<div className={classes.full_bg_slider} onMouseMove={handleMouseMove}>
						<div className={classes.full_bg_slider_hand} style={{right: slideWidth}}/>
						<img src={imageBottom} alt="image" className={classes.full_bg_slider_before}/>
						<div style={{width: slideWidth}} className={classes.full_bg_slider_after}>
							<img src={imageTop} alt="image"/>
						</div>
					</div>
				)}
		</>
	);
};

export default MainSliderProducts;
