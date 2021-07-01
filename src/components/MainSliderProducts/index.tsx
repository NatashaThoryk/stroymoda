import React, {useEffect, useState} from 'react';
import classes from './MainSliderProducts.module.scss';


const MainSliderProducts = ({imageTop = '', imageBottom = ''}) => {
	const [slideWidth, setSlideWidth] = useState(0);

	useEffect(() => {
		setSlideWidth(window.innerWidth / 2);
	}, []);

	const handleMouseMove = (e: any) => {
		const w = e.target.clientWidth;
		setSlideWidth(w - e.screenX);
	};

	return (
		<div className={classes.full_bg_slider} onMouseMove={handleMouseMove}>
			<div className={classes.full_bg_slider_hand} style={{ right: slideWidth }}/>
			<img src={imageBottom} alt="image" className={classes.full_bg_slider_before} />
			<div  style={{width: slideWidth}} className={classes.full_bg_slider_after}>
				<img src={imageTop} alt="image"/>
			</div>
		</div>
	);
};

export default MainSliderProducts;
