import React, {useEffect, useState} from 'react';
import classes from './styles.module.scss';


export default ({imageTop = '', imageBottom = ''}) => {
	const [slideWidth, setSlideWidth] = useState(0);
	useEffect(() => {
		setSlideWidth(window.innerWidth / 2);
		console.log(222, window.innerWidth)
	}, [])
	const handleMouseMove = (e: any) => {
		console.log(3333, window.innerWidth, e.screenX)
		setSlideWidth(-e.screenX);
	}
	return (
		<div className={classes.full_bg_slider} onMouseMove={handleMouseMove}>
			<div  style={{right: `${slideWidth}px`}} className={classes.full_bg_slider_hand}/>
			<img src="/img/flat_service-empty.gif" alt="image"/>
			<div className={classes.full_bg_slider_before}>
				<img src={imageTop} alt="image"/>
			</div>
			<div  style={{width: `${slideWidth}px`}} className={classes.full_bg_slider_after}>
				<img src={imageBottom} alt="image"/>
			</div>
		</div>
	)
}
